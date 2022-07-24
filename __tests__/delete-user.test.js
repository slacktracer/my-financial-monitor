import { db, kv } from "../dist/application/database.js";
import { createUser } from "../dist/users/core/create-user/create-user.js";
import { deleteUser } from "../dist/users/core/delete-user/delete-user.js";
import { readUsers } from "../dist/users/core/read-users/read-users.js";
import { truncateTables } from "./utilities/truncate-tables.js";
import { createTables } from "./utilities/create-tables.js";

describe("delete user", () => {
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

  test("an existing user is deleted", async () => {
    // given
    const email = "thiago@example.com";
    const password = "Password1234!";
    const username = "thiago";

    const data = { email, password, username };

    const { user_id: userID } = await createUser({ data });

    const expectedUserCount = 0;

    // when
    await deleteUser({ userID });
    const actualUserCount = (await readUsers()).length;

    // then
    expect(actualUserCount).toEqual(expectedUserCount);
  });
});
