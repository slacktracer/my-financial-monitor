import { db, loadQuery } from "../../../application/database.js";

const readCategoriesQuery = loadQuery({
  base: import.meta.url,
  url: "./read-categories.sql",
});

export const readCategories = async () => {
  const categories = await db.manyOrNone(readCategoriesQuery);

  return categories;
};
