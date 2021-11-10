import { query } from "../../../database.js";
import { addAccountQuery } from "./add-account-query.js";

export const addAccount = async ({ data }) => {
  const { initialAmount, name } = data;

  const {
    rows: [addedAccount],
  } = await query(addAccountQuery, [initialAmount, name]);

  return addedAccount;
};
