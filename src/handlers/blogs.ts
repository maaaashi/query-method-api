import { zValidator } from "@hono/zod-validator";
import { createFactory } from "hono/factory";
import * as z from "zod";
import { allBlogs } from "../data";

const RequestJsonSchema = z
  .object({
    query: z.string().optional(),
    limit: z.number().int().optional(),
  })
  .strict();

const factory = createFactory();

export const queryBlogsHandlers = factory.createHandlers(
  zValidator("json", RequestJsonSchema, (result, c) => {
    if (!result.success) {
      return c.json({ error: "Invalid request body" }, 400);
    }
  }),
  async (c) => {
    const { query, limit } = c.req.valid("json");

    return c.json(allBlogs.search(query).sortById().take(limit));
  },
);
