import { defaultLambdaRole } from "../../../iam-roles";
import * as aws from "@pulumi/aws";

export const loginHandler = new aws.lambda.CallbackFunction("login-handler", {
  callback: async (ev, ctx) => {
    return {
      statusCode: 200,
      body: "Hello, API Gateway!",
    };
  },
  role: defaultLambdaRole,
});
