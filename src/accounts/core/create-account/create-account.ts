import { query } from "../../../database.js";
import { createAccountQuery } from "./create-account-query.js";

export const createAccount = async ({ data }) => {
  const { initialAmount, name } = data;

  const {
    rows: [createdAccount],
  } = await query(createAccountQuery, [initialAmount, name]);

  return createdAccount;
};
