INSERT INTO
  CATEGORY (CATEGORY_ID, GROUP_ID, NAME)
VALUES
  (GEN_RANDOM_UUID(), ${ groupID }, ${ name }) RETURNING CATEGORY_ID,
  GROUP_ID,
  NAME;