import { db, kv } from "../../dist/application/database.js";
import { createUser, readUsers } from "../../dist/users/core/users.js";
import { truncateTables } from "../utilities/truncate-tables.js";
import { createTables } from "../utilities/create-tables.js";

describe("read users", () => {
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

  it("returns all users", async () => {
    // given
    const usersData = [
      {
        email: "thiago@example.com",
        password: "Password1234!",
        username: "thiago",
      },
      {
        email: "thiago@example.com",
        password: "Password1234!",
        username: "thiago",
      },
      {
        email: "thiago@example.com",
        password: "Password1234!",
        username: "thiago",
      },
    ];

    await Promise.all([
      await createUser({ data: usersData[0] }),
      await createUser({ data: usersData[1] }),
      await createUser({ data: usersData[2] }),
    ]);

    // when
    const users = await readUsers();

    // then
    expect(users.length).toEqual(3);
  });
});
