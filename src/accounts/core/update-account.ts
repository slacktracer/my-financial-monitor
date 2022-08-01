import { db, loadQuery } from "../../application/database.js";

const updateAccountQuery = loadQuery({
  base: import.meta.url,
  url: "./update-account.sql",
});

export const updateAccount = async ({ accountID, data, userID }) => {
  const { ...update } = data;

  const sets = db.$config.pgp.helpers.sets(update);

  const updatedAccount = await db.one(updateAccountQuery, {
    accountID,
    sets,
    userID,
  });

  return updatedAccount;
};
