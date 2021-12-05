import initPGPromise from "pg-promise";

export const pgp = initPGPromise();

export const db = pgp({});

export { loadQuery } from "./loadQuery.js";
