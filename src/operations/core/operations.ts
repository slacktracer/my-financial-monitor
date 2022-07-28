import { setCustomColumnNamesTransformations } from "../../application/set-custom-column-names-transformations.js";

setCustomColumnNamesTransformations(["account_id", "accountID"]);
setCustomColumnNamesTransformations(["category_id", "categoryID"]);
setCustomColumnNamesTransformations(["group_id", "groupID"]);
setCustomColumnNamesTransformations(["operation_id", "operationID"]);
setCustomColumnNamesTransformations(["user_id", "userID"]);

export * from "./create-operation/create-operation.js";
export * from "./delete-operation/delete-operation.js";
export * from "./read-operation/read-operation.js";
export * from "./read-operation/read-operations.js";
export * from "./update-operation/update-operation.js";
