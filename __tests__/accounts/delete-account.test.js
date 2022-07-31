import { v4 as uuid } from "uuid";

import {
  deleteAccount,
  readAccounts,
} from "../../dist/accounts/core/accounts.js";
import { db, kv, pgm } from "../../dist/application/database.js";
import { createTables } from "../utilities/create-tables.js";
import { snakeCase } from "../utilities/snake-case.js";
import { truncateTables } from "../utilities/truncate-tables.js";

describe("delete account", () => {
  afterAll(async () => {
    await db.$pool.end();
    await kv.quit();
  });

  afterEach(async () => {
    await truncateTables();
  });

  beforeAll(async () => {
    await createTables();
  });

  test("an existing account is deleted", async () => {
    // given
    const accountID = uuid();
    const userID = uuid();

    const accountData = snakeCase({
      object: {
        accountID,
        initialAmount: 0,
        name: "Account!",
        userID,
      },
    });

    const userData = snakeCase({
      object: {
        email: "mr.user@example.com",
        name: "Mr. User!",
        password: "1234",
        username: "mr.user",
        userID,
      },
    });

    pgm.public.getTable("user").insert(userData);
    pgm.public.getTable("account").insert(accountData);

    const expectedAccountCount = 0;

    // when
    await deleteAccount({ accountID, userID });
    const actualAccountCount = (await readAccounts({ userID })).length;

    // then
    expect(actualAccountCount).toEqual(expectedAccountCount);
  });
});
