import { Hono } from "hono";
import { queryBlogsHandlers } from "./handlers/blogs";

const app = new Hono();

app.get("/ping", (c) => c.text("pong"));

app.on("query", "/blogs", ...queryBlogsHandlers);

export default app;
