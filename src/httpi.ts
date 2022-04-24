import { createRoutes as createAccountRoutes } from "./accounts/httpi/create-routes.js";

export const createHTTPInterface = ({ application }) => {
  createAccountRoutes({ application });
};
