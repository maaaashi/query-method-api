import type { Context } from "hono";

class User {
  constructor(
    public readonly id: number,
    public readonly name: string,
  ) {}
}

type Users = User[];

export const queryUsersHandler = async (c: Context) => {
  return c.json<Users>([
    new User(1, "田中 太郎"),
    new User(2, "佐藤 花子"),
    new User(3, "鈴木 次郎"),
    new User(4, "高橋 三郎"),
    new User(5, "伊藤 四郎"),
  ]);
};
