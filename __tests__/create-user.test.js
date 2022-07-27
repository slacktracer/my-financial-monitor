import { db, kv } from "../dist/application/database.js";
import { createUser, readUsers } from "../dist/users/core/users.js";
import { truncateTables } from "./utilities/truncate-tables.js";
import { createTables } from "./utilities/create-tables.js";

describe("create user", () => {
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

  test("a new user is created", async () => {
    // given
    const email = "thiago@example.com";
    const password = "Password1234!";
    const username = "thiago";

    const data = { email, password, username };

    const expectedCreatedUser = expect.objectContaining({ email, username });
    const expectedUserCount = 1;

    // when
    const createdUser = await createUser({ data });
    const userCount = (await readUsers()).length;

    // then
    expect(createdUser).toEqual(expectedCreatedUser);
    expect(userCount).toEqual(expectedUserCount);
  });
});
