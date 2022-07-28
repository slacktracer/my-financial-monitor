import { db } from "../../../application/database.js";
import { loadQuery } from "../../../application/load-query.js";

const deleteOperationQuery = loadQuery({
  base: import.meta.url,
  url: "./delete-operation.sql",
});

export const deleteOperation = ({ operationID, userID }) =>
  db.none(deleteOperationQuery, { operationID, userID });
