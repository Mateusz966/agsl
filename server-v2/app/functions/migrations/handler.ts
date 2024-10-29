import middy from "@middy/core";
import { dataSource } from "../../shared/config/db";

const connectToDb = dataSource.initialize();

export const handle = middy(async (): Promise<void> => {
  console.info("Pre connection");

  await connectToDb;
  await dataSource.runMigrations();

  console.info("Post connection");
});