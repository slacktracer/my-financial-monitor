import { db, loadQuery } from "../../../common/database.js";

const readAccountQuery = loadQuery({
  base: import.meta.url,
  url: "./read-account.sql",
});

export const readAccount = async ({ id }) => {
  const account = await db.oneOrNone(readAccountQuery, { accountID: id });

  return account;
};
