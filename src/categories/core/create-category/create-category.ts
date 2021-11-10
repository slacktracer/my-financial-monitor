import { query } from "../../../database.js";
import { createCategoryQuery } from "./create-category-query.js";

export const createCategory = async ({ data }) => {
  const { groupID, name } = data;

  const {
    rows: [addedCategory],
  } = await query(createCategoryQuery, [groupID, name]);

  return addedCategory;
};
