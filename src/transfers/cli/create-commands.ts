import { readTransfers } from "../core/read-transfers.js";

export const createCommands = ({ program }) => {
  const transfersCommand = program.command("transfers");

  transfersCommand.command("read").action(async () => {
    const transfers = await readTransfers();

    console.table(transfers);
  });

  return transfersCommand;
};
