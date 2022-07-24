import { db, loadQuery } from "../../dist/application/database.js";

const createTablesQuery = loadQuery({
  base: import.meta.url,
  url: "../../src/application/create-tables.sql",
});

export const createTables = () => db.query(createTablesQuery);
