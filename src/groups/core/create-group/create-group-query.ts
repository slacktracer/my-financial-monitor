export const createGroupQuery = `
INSERT INTO
    PUBLIC.GROUP (GROUP_ID, NAME)
VALUES
    (GEN_RANDOM_UUID(), $1) RETURNING GROUP_ID,
    NAME;
`;
