import { get } from 'env-var';
import '../libs/utils/dotenv';

export const databaseConfig = {
  host: get('DB_HOST').required().asString(),
  port: get('DB_PORT').required().asIntPositive(),
  username: get('DB_USERNAME').required().asString(),
  password: get('DB_PASSWORD').required().asString(),
  dbName: get('DB_NAME').required().asString(),
};
