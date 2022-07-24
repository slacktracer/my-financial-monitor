import { db, loadQuery } from "../../../application/database.js";

const deleteUserQuery = loadQuery({
  base: import.meta.url,
  url: "./delete-user.sql",
});

export const deleteUser = async ({ userID }) =>
  db.none(deleteUserQuery, { userID });
