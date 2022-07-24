import { db, kv } from "../dist/application/database.js";
import { createUser } from "../dist/users/core/create-user/create-user.js";
import { readUser } from "../dist/users/core/read-users/read-user.js";
import { truncateTables } from "./utilities/truncate-tables.js";
import { createTables } from "./utilities/create-tables.js";

describe("read user", () => {
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

  it("returns the user with the specified user ID", async () => {
    // given
    const email = "thiago@example.com";
    const password = "Password1234!";
    const username = "thiago";

    const data = { email, password, username };

    const { user_id: userID } = await createUser({ data });

    const expectedReturnValue = expect.objectContaining({ email, username });

    // when
    const returnValue = await readUser({ userID });

    // then
    expect(returnValue).toEqual(expectedReturnValue);
  });
});
