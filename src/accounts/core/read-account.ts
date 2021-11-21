import { query } from "../../database.js";

export const readAccount = async ({ id }) => {
  const result = await query("SELECT * FROM ACCOUNT WHERE ACCOUNT_ID = $1;", [
    id,
  ]);

  const { rows: accounts } = result;

  return accounts;
};
