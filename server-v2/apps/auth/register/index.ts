import * as aws from "@pulumi/aws";
import { defaultLambdaRole } from "../../../iam-roles";
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import validator from "@middy/validator";

export const registerValidationSchema = {
  body: {
    type: "object",
    properties: {
      email: { type: "email", minLength: 3 },
      password: { type: "string", minLength: 6 },
    },
    required: ["email", "password"],
  },
};

const baseHandler = async (event: any) => {
  const { email, password } = event?.body;

  return {
    statusCode: 201,
    body: JSON.stringify({ email, password }),
  };
};

const register = middy(baseHandler)
  .use(jsonBodyParser())
  .use(validator({ eventSchema: registerValidationSchema }));

export const registerHandler = new aws.lambda.CallbackFunction(
  "register-handler",
  {
    callback: async (ev, ctx) => {
      return "XD"
    },
    role: defaultLambdaRole,
  }
);
