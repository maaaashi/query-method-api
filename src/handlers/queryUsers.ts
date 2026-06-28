import type { Context } from "hono";

export const queryUsersHandler = async (c: Context) => {
  return c.text("ok");
};
