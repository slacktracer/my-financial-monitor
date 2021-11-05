import { query } from "../../database.js";

export const readTransfers = async () => {
  const result = await query("SELECT * FROM TRANSFER ORDER BY AT DESC;", []);

  const { rows: transfers } = result;

  return transfers;
};
