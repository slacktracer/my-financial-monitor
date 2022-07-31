import { setCustomColumnNamesTransformations } from "../../application/set-custom-column-names-transformations.js";

setCustomColumnNamesTransformations(["account_id", "accountID"]);
setCustomColumnNamesTransformations(["user_id", "userID"]);

export * from "./create-account.js";
export * from "./delete-account.js";
export * from "./read-account.js";
export * from "./read-accounts.js";
export * from "./update-account.js";
