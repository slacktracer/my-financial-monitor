export const createAccountQuery = `
INSERT INTO
  ACCOUNT (ACCOUNT_ID, INITIAL_AMOUNT, NAME)
VALUES
  (GEN_RANDOM_UUID(), $1, $2) RETURNING ACCOUNT_ID,
  INITIAL_AMOUNT,
  NAME;
`;