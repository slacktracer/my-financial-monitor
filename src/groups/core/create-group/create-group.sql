INSERT INTO
  PUBLIC.GROUP (GROUP_ID, NAME)
VALUES
  (GEN_RANDOM_UUID(), ${ name })
RETURNING
  GROUP_ID,
  NAME;
