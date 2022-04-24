import { readAccount } from "../core/read-accounts/read-account.js";
import { readAccounts } from "../core/read-accounts/read-accounts.js";

export const createRoutes = ({ application }) => {
  application.get("/accounts", async (request, response) => {
    const accounts = await readAccounts();

    response.json(accounts);
  });

  application.get("/accounts/:id", async (request, response) => {
    const { id } = request.params;

    const account = await readAccount({ id });

    response.json(account);
  });
};
