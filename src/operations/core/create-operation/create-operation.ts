import { db, loadQuery } from "../../../application/database.js";

const createOperationQuery = loadQuery({
  base: import.meta.url,
  url: "./create-operation.sql",
});

export const createOperation = async ({ data, userID }) => {
  const {
    accountID,
    amount,
    amount_per_unit,
    categoryID,
    comments,
    groupID,
    type,
    unit_count,
  } = data;

  const createdOperation = db.one(createOperationQuery, {
    accountID,
    amount,
    amount_per_unit,
    categoryID,
    comments,
    groupID,
    type,
    unit_count,
    userID,
  });

  return createdOperation;
};
