import { v4 as uuid } from "uuid";

import { db, kv, pgm } from "../../dist/application/database.js";
import { createOperation } from "../../dist/operations/core/operations.js";
import { truncateTables } from "../utilities/truncate-tables.js";
import { createTables } from "../utilities/create-tables.js";
import { snakeCase } from "../utilities/snake-case.js";

describe("create operation", () => {
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

  test("a new operation is created", async () => {
    // given
    const categoryID = uuid();
    const groupID = uuid();
    const userID = uuid();

    const groupData = snakeCase({
      object: { groupID, name: "Category!", userID },
    });

    const categoryData = snakeCase({
      object: {
        categoryID,
        groupID,
        name: "Group!",
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
    pgm.public.getTable("group").insert(groupData);
    pgm.public.getTable("category").insert(categoryData);

    const accountID = uuid();
    const amount = 1;
    const amountPerUnit = 100;
    const comments = "";
    const type = "Expense";
    const unitCount = 1;

    const data = {
      accountID,
      amount,
      amountPerUnit,
      categoryID,
      comments,
      groupID,
      type,
      unitCount,
    };

    const expectedCreatedOperation = expect.objectContaining({
      accountID,
      amount,
      amountPerUnit,
      categoryID,
      comments,
      groupID,
      type,
      unitCount,
      userID,
    });

    // when
    const createdOperation = await createOperation({ data, userID });

    // then
    expect(createdOperation).toEqual(expectedCreatedOperation);
  });
});
