import { addGroup } from "../core/add-group.js";
import { readGroups } from "../core/read-groups.js";

export const createCommands = ({ program }) => {
  const groupsCommand = program.command("groups");

  groupsCommand.command("add").action(async () => {
    const group = await addGroup();

    console.table(group);
  });

  groupsCommand.command("read").action(async () => {
    const groups = await readGroups();

    console.table(groups);
  });

  return groupsCommand;
};
