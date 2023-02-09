import { defineConfig } from '@mikro-orm/postgresql';

export default defineConfig({
  entities: ['dist/**/*.model.js'],
  entitiesTs: ['src/**/*.model.ts'],
  dbName: 'postgres',
  user: 'postgres',
  password: 'postgres',
  port: 5666,
  type: 'postgresql',
});
