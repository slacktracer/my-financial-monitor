import { setCustomColumnNamesTransformations } from "../../application/set-custom-column-names-transformations.js";

setCustomColumnNamesTransformations(["user_id", "userID"]);

export * from "./create-user/create-user.js";
export * from "./delete-user/delete-user.js";
export * from "./read-user/read-user.js";
export * from "./read-user/read-users.js";
export * from "./update-user/update-user.js";
