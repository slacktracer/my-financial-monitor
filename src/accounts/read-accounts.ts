import { query } from "../database.js";

export const readAccounts = async () => {
  const result = await query("SELECT * FROM ACCOUNT ORDER BY NAME;", []);

  const { rows: accounts } = result;

  return accounts;
};
