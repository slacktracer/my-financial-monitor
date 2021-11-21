import { createOperation } from "../core/create-operation/create-operation.js";
import { readOperations } from "../core/read-operations.js";
import { updateOperation } from "../core/update-operation.js";

export const createCommands = ({ program }) => {
  const operationsCommand = program.command("operations");

  operationsCommand
    .command("create")
    .requiredOption("-d, --data <data>")
    .action(async (options) => {
      const data = JSON.parse(options.data);

      const operation = JSON.stringify(
        await createOperation({ data }),
        null,
        2,
      );

      console.log(operation);
    });

  operationsCommand.command("read").action(async () => {
    const operations = await readOperations();

    console.table(operations);
  });

  operationsCommand
    .command("update")
    .requiredOption("-d, --data <data>")
    .action(async (options) => {
      const data = JSON.parse(options.data);

      const operation = await updateOperation({ data });

      console.table(operation);
    });

  return operationsCommand;
};
