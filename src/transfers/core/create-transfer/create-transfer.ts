import { query } from "../../../database.js";
import { createTransferQuery } from "./create-transfer-query.js";

export const createTransfer = async ({ data }) => {
  const { amount, fromAccountID, toAccountID } = data;

  const {
    rows: [createdTransfer],
  } = await query(createTransferQuery, [amount, fromAccountID, toAccountID]);

  return createdTransfer;
};
