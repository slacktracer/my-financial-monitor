import { db, loadQuery } from "../../../common/database.js";

const readUsersQuery = loadQuery({
  base: import.meta.url,
  url: "./read-users.sql",
});

export const readUsers = async () => {
  const users = await db.manyOrNone(readUsersQuery);

  return users;
};
