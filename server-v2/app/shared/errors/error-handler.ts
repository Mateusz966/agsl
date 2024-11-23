import httpErrorHandler from "@middy/http-error-handler";

const httpErrorHandlerOptions = {
  logger: (error: any) => {
    const message = error.statusCode < 500 ? "HTTP ERROR:" : "INTERNAL ERROR:";
    console.log("ERROR:", { error, message });
  },
  fallbackMessage: JSON.stringify({
    message: "Internal server error",
  }),
};

export const httpErrorHandlerConfigured = httpErrorHandler(
  httpErrorHandlerOptions
);
