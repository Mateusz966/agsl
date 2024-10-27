import cors from "@middy/http-cors";
import { httpCorsConfig } from "../config/httpCors";

export const httpCorsConfigured = cors(httpCorsConfig);