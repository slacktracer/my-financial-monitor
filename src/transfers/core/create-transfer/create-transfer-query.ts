export const createTransferQuery = `
INSERT INTO
  TRANSFER (
    AMOUNT,
    AT,
    FROM_ACCOUNT_ID,
    TO_ACCOUNT_ID,
    TRANSFER_ID
  )
VALUES
  ($1, NOW(), $2, $3, GEN_RANDOM_UUID()) RETURNING AMOUNT,
  AT,
  FROM_ACCOUNT_ID,
  TO_ACCOUNT_ID,
  TRANSFER_ID;
`;