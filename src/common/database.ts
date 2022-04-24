import initPGPromise from "pg-promise";

export const pgp = initPGPromise();

const options = process.env.LOCAL === "yes" ? { ssl: true } : {};

export const db = pgp(options);

export { loadQuery } from "./load-query.js";
