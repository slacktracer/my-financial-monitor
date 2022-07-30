export const snakeCase = ({ object }) => {
  const keys = Object.keys(object);

  const camelCaseKeys = keys.filter((key) => /[a-z][A-Z]/.test(key));

  camelCaseKeys.forEach((key) => {
    const snakeCaseKey = key.replace(
      /[a-z][A-Z]/g,
      (match) => `${match[0]}_${match[1]}`,
    );

    object[snakeCaseKey.toLowerCase()] = object[key];

    delete object[key];
  });

  return object;
};
