import { promises as fs } from "node:fs";
import { globby } from "globby";
import { format } from "sql-formatter";

const paths = await globby(["../src/**/*.sql"]);

const sqlFormatterOptions = {
  keywordCase: "upper",
  language: "postgresql",
  tabWidth: 2,
};

const variablesMap = {};

let variablesCount = 0;

const formattingQueries = paths.map(async (path) => {
  const query = await fs.readFile(path, "utf-8");

  const queryWithPlaceholders = query.replace(
    /\$\{ (.+?) \}/g,
    (match, pcg1) => {
      const key = `PLACEHOLDER_VARIABLE_${(variablesCount += 1)}`;
      variablesMap[key] = pcg1;

      return `$ { ${key} }`;
    },
  );

  const formattedQuery = format(queryWithPlaceholders, sqlFormatterOptions);

  const formattedQueryWithVariables = formattedQuery.replace(
    /\$ \{ (.+?) \}/g,
    (match, pcg1) => `$\{ ${variablesMap[pcg1]} }`,
  );

  return fs.writeFile(path, formattedQueryWithVariables + "\n");
});

Promise.all(formattingQueries).then(() => {
  console.log("Done.");
});
