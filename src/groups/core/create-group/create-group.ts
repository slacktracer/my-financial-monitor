import { query } from "../../../database.js";
import { createGroupQuery } from "./create-group-query.js";

export const createGroup = async ({ data }) => {
  const { name } = data;

  const {
    rows: [createGroup],
  } = await query(createGroupQuery, [name]);

  return createGroup;
};
