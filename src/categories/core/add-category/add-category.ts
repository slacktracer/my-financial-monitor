import { query } from "../../../database.js";
import { addCategoryQuery } from "./add-category-query.js";

export const addCategory = async ({ data }) => {
  const { groupID, name } = data;

  const {
    rows: [addedCategory],
  } = await query(addCategoryQuery, [groupID, name]);

  return addedCategory;
};
