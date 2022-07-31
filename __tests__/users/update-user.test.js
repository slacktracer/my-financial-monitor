import { db, kv } from "../../dist/application/database.js";
import {
  createUser,
  readUsers,
  updateUser,
} from "../../dist/users/core/users.js";
import { createTables } from "../utilities/create-tables.js";
import { truncateTables } from "../utilities/truncate-tables.js";

describe("update user", () => {
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

  test("an existing user is updated", async () => {
    // given
    const email = "thiago@example.com";
    const password = "Password1234!";
    const username = "thiago";

    const data = { email, password, username };

    const expectedUserCount = 1;

    const createdUser = await createUser({ data });

    const update = { userID: createdUser.userID, username: "lorena" };

    // when
    const updatedUser = await updateUser({ data: update });
    const userCount = (await readUsers()).length;

    // then
    expect(updatedUser.userID).toEqual(update.userID);
    expect(updatedUser.username).toEqual(update.username);
    expect(userCount).toEqual(expectedUserCount);
  });
});
