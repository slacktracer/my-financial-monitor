import { db, loadQuery } from "../../dist/application/database.js";

const clearDatabaseQuery = loadQuery({
  base: import.meta.url,
  url: "./truncate-tables.sql",
});

export const truncateTables = () => db.query(clearDatabaseQuery);
