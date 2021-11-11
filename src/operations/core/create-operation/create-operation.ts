import { query } from "../../../database.js";
import { createOperationQuery } from "./create-operation-query.js";

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

  const {
    rows: [createdOperation],
  } = await query(createOperationQuery, [
    account_id,
    amount,
    amount_per_unit,
    category_id,
    comments,
    group_id,
    type,
    unit_count,
  ]);

  return createdOperation;
};
