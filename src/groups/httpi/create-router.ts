import express from "express";

import { readGroups } from "../core/read-groups/read-groups.js";

export const createRouter = () => {
  const groupsRouter = express.Router();

  groupsRouter.get("/", async (request, response) => {
    const groupsRouter = await readGroups();

    response.json(groupsRouter);
  });

  return groupsRouter;
};
