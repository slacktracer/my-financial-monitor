import { v4 as uuid } from "uuid";

import {
  readAccount,
  readAccounts,
} from "../../dist/accounts/core/accounts.js";
import { db, kv, pgm } from "../../dist/application/database.js";
import { createTables } from "../utilities/create-tables.js";
import { snakeCase } from "../utilities/snake-case.js";
import { truncateTables } from "../utilities/truncate-tables.js";

describe("read account", () => {
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

  test("an existing account is returned", async () => {
    // given
    const accountID = uuid();
    const userID = uuid();

    const _accountData = {
      accountID,
      initialAmount: 0,
      name: "Account!",
      userID,
    };

    const accountData = snakeCase({
      object: _accountData,
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

    const expectedAccount = expect.objectContaining({
      ..._accountData,
    });

    const expectedAccountCount = 1;

    // when
    const actualAccount = await readAccount({ accountID, userID });
    const actualAccountCount = (await readAccounts({ userID })).length;

    // then
    expect(actualAccount).toEqual(expectedAccount);
    expect(actualAccountCount).toEqual(expectedAccountCount);
  });
});
