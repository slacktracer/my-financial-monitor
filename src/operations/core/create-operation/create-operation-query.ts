export const createOperationQuery = `
INSERT INTO
  OPERATION (
    ACCOUNT_ID,
    AMOUNT,
    AMOUNT_PER_UNIT,
    AT,
    CATEGORY_ID,
    COMMENTS,
    GROUP_ID,
    OPERATION_ID,
    TYPE,
    UNIT_COUNT
  )
VALUES
  ($1, $2, $3, NOW(), $4, $5, $6, GEN_RANDOM_UUID(), $7, $8) RETURNING ACCOUNT_ID,
  AMOUNT,
  AMOUNT_PER_UNIT,
  AT,
  CATEGORY_ID,
  COMMENTS,
  GROUP_ID,
  OPERATION_ID,
  TYPE,
  UNIT_COUNT;
`;
