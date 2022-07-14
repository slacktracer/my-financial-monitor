UPDATE
  operation
SET
  ${ sets:raw }
WHERE
  OPERATION_ID = ${ operation_id }
RETURNING
  *;
