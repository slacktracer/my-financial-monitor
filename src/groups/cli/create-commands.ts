import { createGroup } from "../core/create-group/create-group.js";
import { readGroups } from "../core/read-groups.js";

export const createCommands = ({ program }) => {
  const groupsCommand = program.command("groups");

  groupsCommand
    .command("create")
    .requiredOption("-d, --data <data>")
    .action(async (options) => {
      // dist/cli.js groups create -d '{ "name": "some group name" }'
      const data = JSON.parse(options.data);

      const group = JSON.stringify(await createGroup({ data }), null, 2);

      console.log(group);
    });

  groupsCommand.command("read").action(async () => {
    const groups = await readGroups();

    console.table(groups);
  });

  return groupsCommand;
};
