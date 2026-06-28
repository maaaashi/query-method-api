import { Hono } from "hono";
import { queryUsersHandler } from "./handlers/queryUsers";

const app = new Hono();

app.get("/ping", (c) => c.text("pong"));

app.on("query", "/users", queryUsersHandler);

export default app;
