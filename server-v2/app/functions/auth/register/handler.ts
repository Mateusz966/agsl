import { RegisterPayload, registerSchema } from "../event.schema";
import { User } from "../../../entities/user.entity";
import middy from "@middy/core";
import httpEventNormalizer from "@middy/http-event-normalizer";
import jsonBodyParser from "@middy/http-json-body-parser";
import httpHeaderNormalizer from "@middy/http-header-normalizer";
import { httpCorsConfigured } from "../../../shared/middleware/http-cors-configured";
import { zodValidator } from "../../../shared/middleware/zod-validator";
import { awsLambdaResponse } from "../../../shared/response";
import { StatusCodes } from "http-status-codes";
import { dataSource } from "../../../shared/config/db";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createConfig } from "../config";
import { CognitoIdentityProvider } from "@aws-sdk/client-cognito-identity-provider";

const config = createConfig(process.env);

export const reqisterHandler = async (event: RegisterPayload) => {
  const { email, password } = event.body;
  await dataSource.initialize();
  const cognitoProvider = new CognitoIdentityProvider({
    region: "eu-central-1",
    credentials: {
      accessKeyId: config.awsAccessKeyId,
      secretAccessKey: config.awsSecretKey,
    },
  });

  const user = User.create({ email });

  const cognitoUser = await cognitoProvider.signUp({
    ClientId: config.cognitoAppClientId,
    Username: email,
    Password: password,
    UserAttributes: [{ Name: "email", Value: email }],
  });

  const savedUser = await dataSource
    .getRepository(User)
    .save({ ...user, externalId: cognitoUser.UserSub });

  return awsLambdaResponse(StatusCodes.OK, savedUser);
};

export const handle = middy<APIGatewayProxyEvent, APIGatewayProxyResult>()
  .use(jsonBodyParser())
  .use(httpEventNormalizer())
  .use(httpHeaderNormalizer())
  .use(httpCorsConfigured)
  // TODO query parser
  .use(zodValidator(registerSchema))
  .handler(reqisterHandler);
