import { query } from "../../database.js";

export const readCategories = async () => {
  const result = await query("SELECT * FROM CATEGORY ORDER BY NAME;", []);

  const { rows: categories } = result;

  return categories;
};
