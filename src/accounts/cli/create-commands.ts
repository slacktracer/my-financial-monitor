import { createAccount } from "../core/create-account/create-account.js";
import { readAccounts } from "../core/read-accounts.js";

export const createCommands = ({ program }) => {
  const accountsCommand = program.command("accounts");

  accountsCommand
    .command("create")
    .requiredOption("-d, --data <data>")
    .action(async (options) => {
      const data = JSON.parse(options.data);

      const category = JSON.stringify(await createAccount({ data }), null, 2);

      console.log(category);
    });

  accountsCommand.command("read").action(async () => {
    const accounts = await readAccounts();

    console.table(accounts);
  });

  return accountsCommand;
};
