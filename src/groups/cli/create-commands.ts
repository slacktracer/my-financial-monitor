import { addGroup } from "../core/add-group.js";
import { readGroups } from "../core/read-groups.js";

export const createCommands = ({ program }) => {
  const groupsCommand = program.command("groups");

  groupsCommand
    .command("add")
    .requiredOption("-d, --data <data>")
    .action(async (options) => {
      // dist/cli.js groups add -d '{ "name": "some group name" }'
      const data = JSON.parse(options.data);

      const group = JSON.stringify(await addGroup({ data }), null, 2);

      console.log(group);
    });

  groupsCommand.command("read").action(async () => {
    const groups = await readGroups();

    console.table(groups);
  });

  return groupsCommand;
};
