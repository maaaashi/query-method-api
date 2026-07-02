import { Hono } from "hono";
import { queryBlogsHandlers } from "./handlers/blogs";

const app = new Hono();

app.get("/ping", (c) => c.text("pong"));

app.on("QUERY", "/blogs", ...queryBlogsHandlers);

export default app;
