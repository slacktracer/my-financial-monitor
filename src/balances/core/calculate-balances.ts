import { db, loadQuery } from "../../application/database.js";

const calculateBalancesQuery = loadQuery({
  base: import.meta.url,
  url: "./calculate-balances.sql",
});

export const calculateBalances = async () => {
  const balances = await db.manyOrNone(calculateBalancesQuery);

  return balances;
};
