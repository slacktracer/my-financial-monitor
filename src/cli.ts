import cac from "cac";

import { commands as createAccountsCommands } from "./accounts/commands.js";

const loadCommands = ({ cli }) => {
  createAccountsCommands({ cli });
};

const cli = cac("mfm");

loadCommands({ cli });

cli.help(() => void 0);
cli.version("1.0.0");
cli.parse();
