import { db, loadQuery } from "../../../application/database.js";

const updateOperationQuery = loadQuery({
  base: import.meta.url,
  url: "./update-operation.sql",
});

export const updateOperation = async ({ data }) => {
  const { operationID, ...update } = data;

  const sets = db.$config.pgp.helpers.sets(update);

  const updatedOperation = await db.one(updateOperationQuery, {
    operationID,
    sets,
  });

  return updatedOperation;
};
