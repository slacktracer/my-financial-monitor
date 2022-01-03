import { db, loadQuery } from "../../../common/database.js";

const createCategoryQuery = loadQuery({
  base: import.meta.url,
  url: "./create-category.sql",
});

export const createCategory = async ({ data }) => {
  const { groupID, name } = data;

  const createdCategory = db.one(createCategoryQuery, { groupID, name });

  return createdCategory;
};
