import cors from "cors";
import express from "express";
import helmet from "helmet";

if (!process.env.PORT) {
  console.error("NO_PORT");

  process.exit(1);
}

export const startApplication = async () => {
  const healthCheckEndpoint = process.env.HEALTH_CHECK_ENDPOINT;
  const port = Number(process.env.PORT);

  const application = express();

  application.use(helmet());
  application.use(cors());
  application.use(express.json());

  try {
    await new Promise((resolve) => {
      application.listen(port, resolve);
    });

    application.get(healthCheckEndpoint, (request, response) =>
      response.json({ healthy: true }),
    );

    console.log(`Server listening on port ${port}`);
    console.log(`Health checks available at ${healthCheckEndpoint}`);

    return application;
  } catch (error) {
    console.error(error);
  }
};
