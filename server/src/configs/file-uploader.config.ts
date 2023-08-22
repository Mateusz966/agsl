import { get } from 'env-var';

export const fileUploaderConfig = {
  BUCKET_NAME: get('AWS_PRIVATE_BUCKET_NAME').required().asString(),
  AWS_ACCESS_KEY_ID: get('AWS_ACCESS_KEY_ID').required().asString(),
  AWS_REGION: get('AWS_REGION').required().asString(),
  AWS_SECRET_ACCESS_KEY: get('AWS_SECRET_ACCESS_KEY').required().asString(),
};
