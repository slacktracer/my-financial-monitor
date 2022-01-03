import { db, loadQuery } from "../../../common/database.js";

const createAccountQuery = loadQuery({
  base: import.meta.url,
  url: "./create-account.sql",
});

export const createAccount = async ({ data }) => {
  const { initialAmount, name } = data;

  const createdAccount = db.one(createAccountQuery, { initialAmount, name });

  return createdAccount;
};
