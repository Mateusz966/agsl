import middy from "@middy/core";
import httpEventNormalizer from "@middy/http-event-normalizer";
import jsonBodyParser from "@middy/http-json-body-parser";
import httpHeaderNormalizer from "@middy/http-header-normalizer";

import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { StatusCodes } from "http-status-codes";
import { httpCorsConfigured } from "../../../shared/middleware/http-cors-configured";
import { awsLambdaResponse } from "../../../shared/response";
import { httpErrorHandlerConfigured } from "../../../shared/errors/error-handler";

export const dishHandler = async () => {
  //TODO MOCK DISH
  return awsLambdaResponse(StatusCodes.OK, {
    id: "cfa6f23a-6582-451d-929b-e781d637b52d",
    createdAt: "2024-10-21T15:18:38.129Z",
    updatedAt: "2024-10-21T15:18:38.129Z",
    name: "test dishes",
    ingredients: [
      {
        id: "bcb8d798-5e6f-4e1b-b8cb-9b95dee1b5d6",
        createdAt: "2024-10-21T15:18:38.129Z",
        updatedAt: "2024-10-21T15:18:38.129Z",
        name: "ig_test",
        amount: 400,
        unit: "g",
      },
      {
        id: "5845f97c-80ab-4fb8-ad57-aec7e1280661",
        createdAt: "2024-10-21T15:18:38.129Z",
        updatedAt: "2024-10-21T15:18:38.129Z",
        name: "passata",
        amount: 350,
        unit: "ml",
      },
    ],
    photo:
      "https://agsl-main-storage.s3.eu-central-1.amazonaws.com/19dd7663-2327-41a2-a0f3-366ee0ebff0e?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA3PIDSYTIVMCWIH5U%2F20241021%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20241021T171939Z&X-Amz-Expires=900&X-Amz-Signature=c1481fc17ab28f0170d87a2e4d71bd4b15a2941841c477929295bcc2927f6b88&X-Amz-SignedHeaders=host&x-id=GetObject",
  });
};

export const handle = middy<APIGatewayProxyEvent, APIGatewayProxyResult>()
  .use(jsonBodyParser())
  .use(httpEventNormalizer())
  .use(httpHeaderNormalizer())
  .use(httpCorsConfigured)
  // TODO query parser
  .use(httpErrorHandlerConfigured)
  .handler(dishHandler);
