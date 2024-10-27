import * as awsx from "@pulumi/awsx";
import { authRoutes } from "./auth";


const api = new awsx.classic.apigateway.API("api", {
  routes: [
    ...authRoutes,
  ],
});

export const url = api.url;