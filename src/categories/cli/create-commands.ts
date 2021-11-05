import { readCategories } from "../core/read-categories.js";

export const createCommands = ({ program }) => {
  const categoriesCommand = program.command("categories");

  categoriesCommand.command("read").action(async () => {
    const categories = await readCategories();

    console.table(categories);
  });

  return categoriesCommand;
};
