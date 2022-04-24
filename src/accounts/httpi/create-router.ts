import express from "express";

import { readAccount } from "../core/read-accounts/read-account.js";
import { readAccounts } from "../core/read-accounts/read-accounts.js";

export const createRouter = () => {
  const accountsRouter = express.Router();

  accountsRouter.get("/", async (request, response) => {
    const accountsRouter = await readAccounts();

    response.json(accountsRouter);
  });

  accountsRouter.get("/:id", async (request, response) => {
    const { id } = request.params;

    const account = await readAccount({ id });

    response.json(account);
  });

  return accountsRouter;
};
