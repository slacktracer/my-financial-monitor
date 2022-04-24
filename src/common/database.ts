import initPGPromise from "pg-promise";

export const pgp = initPGPromise();

export const db = pgp({ ssl: true });

export { loadQuery } from "./loadQuery.js";
