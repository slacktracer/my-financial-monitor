import { readOperations } from "../core/read-operations.js";

export const createCommands = ({ program }) => {
  const operationsCommand = program.command("operations");

  operationsCommand.command("read").action(async () => {
    const operations = await readOperations();

    console.table(operations);
  });

  return operationsCommand;
};
