import { readGroups } from "../core/read-groups.js";

export const createCommands = ({ program }) => {
  const groupsCommand = program.command("groups");

  groupsCommand.command("read").action(async () => {
    const groups = await readGroups();

    console.table(groups);
  });

  return groupsCommand;
};
