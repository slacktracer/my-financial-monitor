import { v4 as uuid } from "uuid";

import { readAccounts } from "../../dist/accounts/core/accounts.js";
import { db, kv, pgm } from "../../dist/application/database.js";
import { createTables } from "../utilities/create-tables.js";
import { snakeCase } from "../utilities/snake-case.js";
import { truncateTables } from "../utilities/truncate-tables.js";

describe("read accounts", () => {
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

  test("all existing accounts for the given user are returned", async () => {
    // given
    const accountID0 = uuid();
    const accountID1 = uuid();
    const accountID2 = uuid();
    const accountID3 = uuid();
    const userID0 = uuid();
    const userID1 = uuid();

    const accountData0 = snakeCase({
      object: {
        accountID: accountID0,
        initialAmount: 0,
        name: "Account 0!",
        userID: userID0,
      },
    });

    const accountData1 = snakeCase({
      object: {
        accountID: accountID1,
        initialAmount: 0,
        name: "Account 1!",
        userID: userID0,
      },
    });

    const accountData2 = snakeCase({
      object: {
        accountID: accountID2,
        initialAmount: 0,
        name: "Account 2!",
        userID: userID1,
      },
    });

    const accountData3 = snakeCase({
      object: {
        accountID: accountID3,
        initialAmount: 0,
        name: "Account 3!",
        userID: userID0,
      },
    });

    const userData0 = snakeCase({
      object: {
        email: "mr.user0@example.com",
        name: "Mr. User 0!",
        password: "1234",
        username: "mr.user0",
        userID: userID0,
      },
    });

    const userData1 = snakeCase({
      object: {
        email: "mr.user1@example.com",
        name: "Mr. User 1!",
        password: "1234",
        username: "mr.user1",
        userID: userID1,
      },
    });

    pgm.public.getTable("user").insert(userData0);
    pgm.public.getTable("user").insert(userData1);
    pgm.public.getTable("account").insert(accountData0);
    pgm.public.getTable("account").insert(accountData1);
    pgm.public.getTable("account").insert(accountData2);
    pgm.public.getTable("account").insert(accountData3);

    const expectedAccountCount = 3;

    // when
    const actualAccounts = await readAccounts({ userID: userID0 });

    // then
    expect(actualAccounts.length).toEqual(expectedAccountCount);
  });
});
