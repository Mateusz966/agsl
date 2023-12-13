import { get } from 'env-var';
import '../libs/utils/dotenv';

export const databaseConfig = {
  type: get('DB_HOST').required().asString() as 'postgres',
  port: get('DB_PORT').required().asIntPositive(),
  username: get('DB_USERNAME').required().asString(),
  password: get('DB_PASSWORD').required().asString(),
  database: get('DB_NAME').required().asString(),
  host: 'agsl-app-postgres'
};
