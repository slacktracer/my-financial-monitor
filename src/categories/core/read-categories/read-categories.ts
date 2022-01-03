import { db, loadQuery } from "../../../common/database.js";

const readCategoriesQuery = loadQuery({
  base: import.meta.url,
  url: "./read-categories.sql",
});

export const readCategories = async () => {
  const categories = await db.manyOrNone(readCategoriesQuery);

  return categories;
};
