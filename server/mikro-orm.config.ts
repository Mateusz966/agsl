import { defineConfig } from '@mikro-orm/postgresql';
import { databaseConfig } from '@config/database.config';

export default defineConfig({
  entities: ['dist/**/*.model.js'],
  entitiesTs: ['src/**/*.model.ts'],
  ...databaseConfig,
});
