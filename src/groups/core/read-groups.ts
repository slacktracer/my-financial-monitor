import { query } from "../../database.js";

export const readGroups = async () => {
  const result = await query("SELECT * FROM PUBLIC.GROUP ORDER BY NAME;", []);

  const { rows: groups } = result;

  return groups;
};
