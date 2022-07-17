import { db, loadQuery } from "../../../application/database.js";

const readOperationsQuery = loadQuery({
  base: import.meta.url,
  url: "./read-operations.sql",
});

export const readOperations = async () => {
  const operations = await db.manyOrNone(readOperationsQuery);

  return operations;
};
