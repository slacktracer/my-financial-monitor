import initPGPromise from "pg-promise";
import { createClient } from "redis";

import { transformColumnNames } from "./transform-column-names.js";
import { loadInMemoryDatabase } from "./load-in-memory-database.js";

const pgp = initPGPromise();

const options = process.env.LOCAL === "yes" ? { ssl: true } : {};

export const db =
  process.env.USE_MEMORY_DATABASE === "yes"
    ? await loadInMemoryDatabase()
    : pgp(options);

db.$config.options.receive = transformColumnNames;

export { loadQuery } from "./load-query.js";

const redisClient = createClient({ url: process.env.REDIS_CONNECTION_STRING });

await redisClient.connect().catch(console.error);

export { redisClient as kv };
