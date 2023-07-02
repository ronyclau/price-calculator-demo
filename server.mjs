/* eslint-env node */
import http from "node:http";

import finalhandler from "finalhandler";
import serveStatic from "serve-static";

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

const serve = serveStatic("./dist");
const server = http.createServer((req, res) => {
  const end = finalhandler(req, res);
  serve(req, res, end);
});

server.on("listening", () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
server.listen(PORT);
