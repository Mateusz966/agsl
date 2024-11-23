import { z } from "zod";
import { pipeline } from "ts-pipe-compose";
import { DataSource } from "typeorm";
import { loadEnvs } from "../utils/env";
import { User } from "../../entities/user.entity";
import { Migration1730148420238 } from "../../migrations/1730148420238-migration";
import { Dish } from "../../entities/dish.entity";
import { ShoppingList } from "../../entities/shopping-list.entity";
import { Ingredients } from "../../entities/ingredients.entity";
import { DishPhoto } from "../../entities/dish-photo.entity";

// MODELS_IMPORT

loadEnvs();

const loadDbConfigFromEnvs = (env: any) => ({
  type: "postgres",
  synchronize: false,
  logging: true,
  entities: [
    User,
    Dish,
    ShoppingList,
    Ingredients,
    DishPhoto,
    // MODELS_SETUP
  ],
  migrations: [],
  cli: {
    migrationsDir: "migrations",
  },
  url: env.POSTGRES_URL,
});

const validateDbConfig = (config: any) => {
  const schema = z.object({
    type: z.string(),
    url: z.string().url(),
    synchronize: z.any(),
    logging: z.boolean(),
    entities: z.array(z.any()),
    migrations: z.array(z.any()),
    cli: z.object({
      migrationsDir: z.string(),
    }),
  });

  try {
    schema.parse(config);
  } catch (error) {
    throw new Error(error as string);
  }

  return config;
};

const createDbConfigFromEnvs = pipeline(loadDbConfigFromEnvs, validateDbConfig);

export const config = createDbConfigFromEnvs(process.env);

export const dataSource = new DataSource(config);
