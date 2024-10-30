import { RegisterPayload, registerSchema } from "./event.schema";
import { User } from "../../entities/user.entity";
import middy from "@middy/core";
import httpEventNormalizer from "@middy/http-event-normalizer";
import jsonBodyParser from "@middy/http-json-body-parser";
import httpHeaderNormalizer from "@middy/http-header-normalizer";
import { httpCorsConfigured } from "../../shared/middleware/http-cors-configured";
import { zodValidator } from "../../shared/middleware/zod-validator";
import { awsLambdaResponse } from "../../shared/response";
import { StatusCodes } from "http-status-codes";
import { dataSource } from "../../shared/config/db";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const reqisterHandler = async (event: RegisterPayload) => {
  console.log("EVENT BODY", event?.body);
  const { email, password } = event.body;
  await dataSource.initialize();

  const user = User.create({ email, password });

  const savedUser = await dataSource.getRepository(User).save(user);

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
