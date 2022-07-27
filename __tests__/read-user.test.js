import { db, kv } from "../dist/application/database.js";
import { createUser, readUser } from "../dist/users/core/users.js";
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

    const { userID } = await createUser({ data });

    const expectedUser = expect.objectContaining({ email, username });

    // when
    const user = await readUser({ userID });

    // then
    expect(user).toEqual(expectedUser);
  });
});
