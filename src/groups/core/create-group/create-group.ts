import { db, loadQuery } from "../../../common/database.js";

const createGroupQuery = loadQuery({
  base: import.meta.url,
  url: "./create-group.sql",
});

export const createGroup = async ({ data }) => {
  const { name } = data;

  const createdGroup = db.one(createGroupQuery, { name });

  return createdGroup;
};
