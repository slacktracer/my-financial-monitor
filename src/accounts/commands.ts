import { calculateBalances } from "./calculate-balances.js";
import { readAccounts } from "./read-accounts.js";

export const commands = ({ cli }) => {
  cli
    .command("accounts", "", {})
    .option("--balances", "")
    .option("--list", "")
    .action(async (options) => {
      console.log(options);

      if (options.balances) {
        const balances = await calculateBalances();

        console.table(balances);
      }

      if (options.list) {
        const accounts = await readAccounts();

        console.table(accounts);
      }
    });
};
