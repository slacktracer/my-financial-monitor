import expressSession from "express-session";

import { createRouter as createAccountsRouter } from "./accounts/httpi/create-router.js";
import { createRouter as createAuthenticationRouter } from "./application/authentication/httpi/create-router.js";
import { isSessionSet } from "./application/authentication/httpi/middleware/is-session-set.js";
import { createExpressApplication } from "./application/create-express-application.js";
import { sessionStore } from "./application/session-store.js";
import { createRouter as createGroupsRouter } from "./groups/httpi/create-router.js";

const expressApplication = await createExpressApplication();

expressApplication.use(
  expressSession({
    cookie: { secure: process.env.LOCAL === "true" },
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
  }),
);

const accountsRouter = createAccountsRouter();
const authenticationRouter = createAuthenticationRouter();
const groupsRouter = createGroupsRouter();

expressApplication.use("/accounts", isSessionSet, accountsRouter);
expressApplication.use("/authentication", authenticationRouter);
expressApplication.use("/groups", isSessionSet, groupsRouter);
