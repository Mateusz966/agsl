import { pipeline } from "ts-pipe-compose";
import { z } from "zod";

const loadEnvs = (env: any) => ({
  appName: env.APP_NAME,
  awsSecretKey: env.AWS_SECRET_KEY,
  awsAccessKeyId: env.AWS_ACCESS_KEY_ID,
  cognitoAppClientId: env.COGNITO_APP_CLIENT_ID,
  awsRegion: env.AWS_REGION,
});

const validateConfig = (config: any) => {
  const schema = z.object({
    appName: z.string().min(1),
    awsSecretKey: z.string().min(1),
    awsAccessKeyId: z.string().min(1),
    cognitoAppClientId: z.string().min(1),
    awsRegion: z.string().min(1),
  });

  try {
    return schema.parse(config);
  } catch (error) {
    throw new Error(error as string);
  }
};

export const createConfig = pipeline(loadEnvs, validateConfig);
