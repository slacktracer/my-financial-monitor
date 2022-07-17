import { db, loadQuery, pgp } from "../../../application/database.js";

const updateOperationQuery = loadQuery({
  base: import.meta.url,
  url: "./update-operation.sql",
});

export const updateOperation = async ({ data }) => {
  const { operation_id, ...update } = data;

  const sets = pgp.helpers.sets(update);

  const updatedOperation = await db.one(updateOperationQuery, {
    operation_id,
    sets,
  });

  return updatedOperation;
};
