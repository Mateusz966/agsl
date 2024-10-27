import { registerHandler } from "./../apps/auth/register/index";
import { loginHandler } from "./../apps/auth/login/handler";
import * as awsx from "@pulumi/awsx";

const root = "/auth";

export const authRoutes: awsx.classic.apigateway.Route[] = [
  {
    path: `${root}/login`,
    eventHandler: loginHandler,
    method: "POST",
  },
  {
    path: `${root}/register`,
    eventHandler: registerHandler,
    method: "POST",
  },
];
