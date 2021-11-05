import { query } from "../../database.js";

export const readOperations = async () => {
  const result = await query("SELECT * FROM OPERATION ORDER BY AT DESC;", []);

  const { rows: operations } = result;

  return operations;
};
