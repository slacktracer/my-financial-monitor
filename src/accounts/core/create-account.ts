import { db, loadQuery } from "../../application/database.js";

const createAccountQuery = loadQuery({
  base: import.meta.url,
  url: "./create-account.sql",
});

export const createAccount = async ({ data, userID }) => {
  const { initialAmount, name } = data;

  const createdAccount = db.one(createAccountQuery, {
    initialAmount,
    name,
    userID,
  });

  return createdAccount;
};
