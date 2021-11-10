import { query } from "../../../database.js";
import { createAccountQuery } from "./create-account-query.js";

export const createAccount = async ({ data }) => {
  const { initialAmount, name } = data;

  const {
    rows: [addedAccount],
  } = await query(createAccountQuery, [initialAmount, name]);

  return addedAccount;
};
