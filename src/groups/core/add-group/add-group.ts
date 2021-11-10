import { query } from "../../../database.js";
import { addGroupQuery } from "./add-group-query.js";

export const addGroup = async ({ data }) => {
  const { name } = data;

  const {
    rows: [addedGroup],
  } = await query(addGroupQuery, [name]);

  return addedGroup;
};
