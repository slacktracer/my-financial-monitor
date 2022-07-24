import { DataType, newDb } from "pg-mem";
import { v4 as uuid } from "uuid";

export const loadInMemoryDatabase = async () => {
  const pgm = await newDb();

  pgm.public.registerFunction({
    args: [],
    implementation: () => uuid(),
    name: "gen_random_uuid",
    returns: DataType.uuid,
  });

  return pgm.adapters.createPgPromise();
};
