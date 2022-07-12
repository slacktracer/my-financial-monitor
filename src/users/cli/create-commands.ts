import { createUser } from "../core/create-user/create-user.js";
import { readUsers } from "../core/read-users/read-users.js";
import { updateUser } from "../core/update-user/update-user.js";

export const createCommands = ({ program }) => {
  const usersCommand = program.command("users");

  usersCommand
    .command("create")
    .requiredOption("-d, --data <data>")
    .action(async (options) => {
      const data = JSON.parse(options.data);

      const user = JSON.stringify(await createUser({ data }), null, 2);

      console.log(user);
    });

  usersCommand.command("read").action(async () => {
    const users = await readUsers();

    console.table(users);
  });

  usersCommand
    .command("update")
    .requiredOption("-d, --data <data>")
    .action(async (options) => {
      const data = JSON.parse(options.data);

      const user = JSON.stringify(await updateUser({ data }), null, 2);

      console.log(user);
    });

  return usersCommand;
};
