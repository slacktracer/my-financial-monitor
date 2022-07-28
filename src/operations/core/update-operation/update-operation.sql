UPDATE
  OPERATION
SET
  ${ sets:raw }
WHERE
  OPERATION_ID = ${ operationID }
RETURNING
  *;
