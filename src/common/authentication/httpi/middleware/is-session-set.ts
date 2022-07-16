export const isSessionSet = (request, response, next) => {
  if (request.session.user === undefined || request.session.user === false) {
    response.status(401).end();

    return;
  }

  next();
};
