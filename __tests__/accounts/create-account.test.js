import { v4 as uuid } from "uuid";

import {
  createAccount,
  readAccounts,
} from "../../dist/accounts/core/accounts.js";
import { db, kv, pgm } from "../../dist/application/database.js";
import { createTables } from "../utilities/create-tables.js";
import { snakeCase } from "../utilities/snake-case.js";
import { truncateTables } from "../utilities/truncate-tables.js";

describe("create account", () => {
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

  test("a new account is created", async () => {
    // given
    const userID = uuid();

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

    const initialAmount = 0;
    const name = "Account!";

    const accountData = { initialAmount, name, userID };

    const expectedCreatedAccount = expect.objectContaining({
      initialAmount,
      name,
      userID,
    });

    const expectedAccountCount = 1;

    // when
    const createdAccount = await createAccount({ data: accountData, userID });
    const actualAccountCount = (await readAccounts({ userID })).length;

    // then
    expect(createdAccount).toEqual(expectedCreatedAccount);
    expect(actualAccountCount).toEqual(expectedAccountCount);
  });
});
