import { db, loadQuery } from "../../../common/database.js";

const readAccountsQuery = loadQuery({
  base: import.meta.url,
  url: "./read-accounts.sql",
});

export const readAccounts = async () => {
  const accounts = await db.manyOrNone(readAccountsQuery);

  return accounts;
};
