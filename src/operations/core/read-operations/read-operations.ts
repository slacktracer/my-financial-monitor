import { db, loadQuery } from "../../../common/database.js";

const readOperationsQuery = loadQuery({
  base: import.meta.url,
  url: "./read-operations.sql",
});

export const readOperations = async () => {
  const operations = await db.manyOrNone(readOperationsQuery);

  return operations;
};
