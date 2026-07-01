import { Hono } from "hono";
import { queryUsersHandlers } from "./handlers/queryUsers";

const app = new Hono();

app.get("/ping", (c) => c.text("pong"));

app.on("query", "/users", ...queryUsersHandlers);

export default app;
