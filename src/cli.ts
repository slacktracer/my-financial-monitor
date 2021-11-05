#!/usr/bin/env node
import "dotenv/config";

import commander from "commander";

import { createCommands as createAccountsCommands } from "./accounts/cli/create-commands.js";
import { createCommands as createBalancesCommands } from "./balances/cli/create-commands.js";
import { createCommands as createCategoriesCommands } from "./categories/cli/create-commands.js";
import { createCommands as createGroupsCommands } from "./groups/cli/create-commands.js";
import { createCommands as createOperationsCommands } from "./operations/cli/create-commands.js";
import { createCommands as createTransfersCommands } from "./transfers/cli/create-commands.js";

const program = new commander.Command();

createAccountsCommands({ program });
createBalancesCommands({ program });
createCategoriesCommands({ program });
createGroupsCommands({ program });
createOperationsCommands({ program });
createTransfersCommands({ program });

program.version("1.0.0");
program.parse(process.argv);
