import { db, loadQuery } from "../../../common/database.js";

const createTransferQuery = loadQuery({
  base: import.meta.url,
  url: "./create-transfer.sql",
});

export const createTransfer = async ({ data }) => {
  const { amount, fromAccountID, toAccountID } = data;

  console.log(amount, fromAccountID, toAccountID);

  const createdTransfer = db.one(createTransferQuery, {
    amount,
    fromAccountID,
    toAccountID,
  });

  return createdTransfer;
};
