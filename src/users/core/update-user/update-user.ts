import bcrypt from "bcrypt";

import { db, loadQuery, pgp } from "../../../common/database.js";

const updateUserQuery = loadQuery({
  base: import.meta.url,
  url: "./update-user.sql",
});

export const updateUser = async ({ data }) => {
  const { user_id, password, ...update } = data;

  const hashedPassword = await bcrypt.hash(password, 10);

  update.password = hashedPassword;

  const sets = pgp.helpers.sets(update);

  const updatedUser = await db.one(updateUserQuery, {
    user_id,
    sets,
  });

  return updatedUser;
};
