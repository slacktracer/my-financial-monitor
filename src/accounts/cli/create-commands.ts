import { readAccounts } from "../core/read-accounts.js";

export const createCommands = ({ program }) => {
  const accountsCommand = program.command("accounts");

  accountsCommand.command("read").action(async () => {
    const accounts = await readAccounts();

    console.table(accounts);
  });

  return accountsCommand;
};
