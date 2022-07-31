import { createAccount, readAccount, readAccounts } from "../core/accounts.js";

export const createCommands = ({ program }) => {
  const accountsCommand = program.command("accounts");

  accountsCommand
    .command("create")
    .requiredOption("-d, --data <data>")
    .action(async (options) => {
      const data = JSON.parse(options.data);

      const account = JSON.stringify(await createAccount({ data }), null, 2);

      console.log(account);
    });

  accountsCommand
    .command("read")
    .option("--accountID <id>")
    .requiredOption("--userID <id>")
    .action(async (options) => {
      const { accountID, userID } = options;

      if (accountID) {
        const account = await readAccount({ accountID, userID });

        console.log(account);

        return;
      }

      const accounts = await readAccounts({ userID });

      console.table(accounts);
    });

  return accountsCommand;
};
