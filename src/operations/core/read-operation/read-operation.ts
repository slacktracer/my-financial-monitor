import { db, loadQuery } from "../../../application/database.js";

const readOperationQuery = loadQuery({
  base: import.meta.url,
  url: "./read-operation.sql",
});

export const readOperation = async ({ operationID, userID }) => {
  const operation = await db.oneOrNone(readOperationQuery, {
    operationID,
    userID,
  });

  return operation;
};
