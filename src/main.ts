import { startApplication } from "./application.js";
import { createHTTPInterface } from "./httpi.js";

(async () => {
  const application = await startApplication();

  application.get("/", (request, response) =>
    response.json({ "Hello, ": "World!" }),
  );

  createHTTPInterface({ application });
})();
