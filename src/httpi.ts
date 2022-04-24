import { createRouter as createAccountsRouter } from "./accounts/httpi/create-router.js";
import { createExpressApplication } from "./common/create-express-application.js";

const expressApplication = await createExpressApplication();

const accountsRouter = createAccountsRouter();

expressApplication.use("/accounts", accountsRouter);
