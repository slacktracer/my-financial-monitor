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
  (
    ${ account_id },
    ${ amount },
    ${ amount_per_unit },
    NOW(),
    ${ category_id },
    ${ comments },
    ${ group_id },
    GEN_RANDOM_UUID(),
    ${ type },
    ${ unit_count }
  )
RETURNING
  ACCOUNT_ID,
  AMOUNT,
  AMOUNT_PER_UNIT,
  AT,
  CATEGORY_ID,
  COMMENTS,
  GROUP_ID,
  OPERATION_ID,
  TYPE,
  UNIT_COUNT;
