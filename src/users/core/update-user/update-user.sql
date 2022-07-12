UPDATE
  PUBLIC.USER
SET
  ${ sets:raw }
WHERE
  USER_id = ${ user_id }
RETURNING
  EMAIL,
  USER_ID,
  USERNAME;
