import { zValidator } from "@hono/zod-validator";
import type { Context } from "hono";
import { createFactory } from "hono/factory";
import * as z from "zod";

class User {
  constructor(
    public readonly id: number,
    public readonly name: string,
  ) {}
}

type Users = User[];

const RequestJsonSchema = z
  .object({
    query: z.string().optional(),
  })
  .strict();

const factory = createFactory();

export const queryUsersHandlers = factory.createHandlers(
  zValidator("json", RequestJsonSchema, (result, c) => {
    if (!result.success) {
      return c.json({ error: "Invalid request body" }, 400);
    }
  }),
  async (c) => {
    const requestJson = c.req.valid("json");

    console.log(requestJson);

    return c.json<Users>([
      new User(1, "田中 太郎"),
      new User(2, "佐藤 花子"),
      new User(3, "鈴木 次郎"),
      new User(4, "高橋 三郎"),
      new User(5, "伊藤 四郎"),
    ]);
  },
);
