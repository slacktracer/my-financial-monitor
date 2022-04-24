import initPGPromise from "pg-promise";

export const pgp = initPGPromise();

const options = process.env.LOCAL === "yes" ? { ssl: true } : undefined;

export const db = pgp(options);

export { loadQuery } from "./loadQuery.js";
