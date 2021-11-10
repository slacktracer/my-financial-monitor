import { addCategory } from "../core/add-category/add-category.js";
import { readCategories } from "../core/read-categories.js";

export const createCommands = ({ program }) => {
  const categoriesCommand = program.command("categories");

  categoriesCommand
    .command("add")
    .requiredOption("-d, --data <data>")
    .action(async (options) => {
      // dist/cli.js categories add -d '{ "groupID": "an existing group id", "name": "some category name" }'
      const data = JSON.parse(options.data);

      const category = JSON.stringify(await addCategory({ data }), null, 2);

      console.log(category);
    });

  categoriesCommand.command("read").action(async () => {
    const categories = await readCategories();

    console.table(categories);
  });

  return categoriesCommand;
};
