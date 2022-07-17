import { db, loadQuery } from "../../../application/database.js";

const createOperationQuery = loadQuery({
  base: import.meta.url,
  url: "./create-operation.sql",
});

export const createOperation = async ({ data }) => {
  const {
    account_id,
    amount,
    amount_per_unit,
    category_id,
    comments,
    group_id,
    type,
    unit_count,
  } = data;

  const createdOperation = db.one(createOperationQuery, {
    account_id,
    amount,
    amount_per_unit,
    category_id,
    comments,
    group_id,
    type,
    unit_count,
  });

  return createdOperation;
};
