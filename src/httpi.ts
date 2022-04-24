import { createRouter as createAccountsRouter } from "./accounts/httpi/create-router.js";
import { createExpressApplication } from "./common/create-express-application.js";
import { createRouter as createGroupsRouter } from "./groups/httpi/create-router.js";

const expressApplication = await createExpressApplication();

const accountsRouter = createAccountsRouter();
const groupsRouter = createGroupsRouter();

expressApplication.use("/accounts", accountsRouter);
expressApplication.use("/groups", groupsRouter);
