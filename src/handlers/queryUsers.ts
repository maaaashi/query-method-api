import type { Context } from "hono";
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

export const queryUsersHandler = async (c: Context) => {
  const contentType = c.req.header("Content-Type") || "";

  if (!contentType.includes("application/json")) {
    return c.json({ error: "Unsupported Media Type" }, 415);
  }

  const body = await c.req.text();

  let bodyJson = {};

  try {
    bodyJson = JSON.parse(body);
  } catch (e) {
    console.error(e);
    return c.json({ error: "Invalid JSON" }, 400);
  }

  try {
    RequestJsonSchema.parse(bodyJson);
  } catch (e) {
    console.error(e);
    return c.json({ error: "Invalid request body" }, 400);
  }

  console.log(bodyJson);

  return c.json<Users>([
    new User(1, "田中 太郎"),
    new User(2, "佐藤 花子"),
    new User(3, "鈴木 次郎"),
    new User(4, "高橋 三郎"),
    new User(5, "伊藤 四郎"),
  ]);
};
