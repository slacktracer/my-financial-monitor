INSERT INTO
  ACCOUNT (ACCOUNT_ID, INITIAL_AMOUNT, NAME)
VALUES
  (GEN_RANDOM_UUID(), ${ initialAmount }, ${ NAME }) RETURNING ACCOUNT_ID,
  INITIAL_AMOUNT,
  NAME;
