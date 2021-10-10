import { startApplication } from "./application.js";

(async () => {
  const application = await startApplication();

  application.get("/", (request, response) =>
    response.json({ "Hello, ": "World!" }),
  );
})();
