import { db, loadQuery } from "../../../common/database.js";

const readGroupsQuery = loadQuery({
  base: import.meta.url,
  url: "./read-groups.sql",
});

export const readGroups = async () => {
  const groups = await db.manyOrNone(readGroupsQuery);

  return groups;
};
