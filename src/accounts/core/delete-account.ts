import { db } from "../../application/database.js";
import { loadQuery } from "../../application/load-query.js";

const deleteAccountQuery = loadQuery({
  base: import.meta.url,
  url: "./delete-account.sql",
});

export const deleteAccount = ({ accountID, userID }) =>
  db.none(deleteAccountQuery, { accountID, userID });
