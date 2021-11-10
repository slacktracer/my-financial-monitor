import { addAccount } from "../core/add-account/add-account.js";
import { readAccounts } from "../core/read-accounts.js";

export const createCommands = ({ program }) => {
  const accountsCommand = program.command("accounts");

  accountsCommand
    .command("add")
    .requiredOption("-d, --data <data>")
    .action(async (options) => {
      const data = JSON.parse(options.data);

      const category = JSON.stringify(await addAccount({ data }), null, 2);

      console.log(category);
    });

  accountsCommand.command("read").action(async () => {
    const accounts = await readAccounts();

    console.table(accounts);
  });

  return accountsCommand;
};
