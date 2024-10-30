

import middy from "@middy/core";
import httpEventNormalizer from "@middy/http-event-normalizer";
import jsonBodyParser from "@middy/http-json-body-parser";
import httpHeaderNormalizer from "@middy/http-header-normalizer";

import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { StatusCodes } from "http-status-codes";
import { httpCorsConfigured } from "../../../shared/middleware/http-cors-configured";
import { awsLambdaResponse } from "../../../shared/response";

export const dishHandler = async () => {

  //TODO MOCK DISH
  return awsLambdaResponse(StatusCodes.OK, [
    {
      "id": "cfa6f23a-6582-451d-929b-e781d637b52d",
      "createdAt": "2024-10-21T15:18:38.129Z",
      "updatedAt": "2024-10-21T15:18:38.129Z",
      "name": "test dishes",
      "ingredients": [
        {
          "id": "bcb8d798-5e6f-4e1b-b8cb-9b95dee1b5d6",
          "createdAt": "2024-10-21T15:18:38.129Z",
          "updatedAt": "2024-10-21T15:18:38.129Z",
          "name": "ig_test",
          "amount": 400,
          "unit": "g"
        },
        {
          "id": "5845f97c-80ab-4fb8-ad57-aec7e1280661",
          "createdAt": "2024-10-21T15:18:38.129Z",
          "updatedAt": "2024-10-21T15:18:38.129Z",
          "name": "passata",
          "amount": 350,
          "unit": "ml"
        }
      ],
      "photo": "https://agsl-main-storage.s3.eu-central-1.amazonaws.com/19dd7663-2327-41a2-a0f3-366ee0ebff0e?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA3PIDSYTIVMCWIH5U%2F20241021%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20241021T183145Z&X-Amz-Expires=900&X-Amz-Signature=269bd8763c8712bb80f14e14021ed2f35b9bca3b542ff267c89903c4d007756d&X-Amz-SignedHeaders=host&x-id=GetObject"
    },
    {
      "id": "f96b161a-dfb3-4cf5-99d2-9992d65715bb",
      "createdAt": "2024-10-21T16:31:36.137Z",
      "updatedAt": "2024-10-21T16:31:36.137Z",
      "name": "test dishes",
      "ingredients": [
        {
          "id": "91d96997-e568-4ddc-bb96-178649d5127b",
          "createdAt": "2024-10-21T16:31:36.137Z",
          "updatedAt": "2024-10-21T16:31:36.137Z",
          "name": "ig_test",
          "amount": 400,
          "unit": "g"
        },
        {
          "id": "9d5bcbcb-01f7-4a94-bc1e-898bd2edf6b0",
          "createdAt": "2024-10-21T16:31:36.137Z",
          "updatedAt": "2024-10-21T16:31:36.137Z",
          "name": "passata",
          "amount": 350,
          "unit": "ml"
        }
      ],
      "photo": "https://agsl-main-storage.s3.eu-central-1.amazonaws.com/72430f13-0d3f-4acf-98b2-ee266ebab468?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA3PIDSYTIVMCWIH5U%2F20241021%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20241021T183145Z&X-Amz-Expires=900&X-Amz-Signature=7210628ffb3d9725a7bca256c64b75192b1744fd0f7384bfb8345117b3d0aa6a&X-Amz-SignedHeaders=host&x-id=GetObject"
    }
  ]);
};

export const handle = middy<APIGatewayProxyEvent, APIGatewayProxyResult>()
  .use(jsonBodyParser())
  .use(httpEventNormalizer())
  .use(httpHeaderNormalizer())
  .use(httpCorsConfigured)
  // TODO query parser
  .handler(dishHandler);
