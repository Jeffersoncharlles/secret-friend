import express from "express";
import { env } from "./env/env";
import "express-async-errors";
import cors from "cors";
import fs from "fs";

import https from "https";
import http from "http";
import { routes } from "./routes";
import { errorsMiddlewares } from "./routes/errors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(errorsMiddlewares);

const runServer = (port: number, server: http.Server) => {
  server.listen(port, () => {
    console.log(`🚀 http Server Running! ${port}`);
  });
};

const regularServer = http.createServer(app);

if (env.NODE_ENV === "production") {
  // done: configurar SSL
  // done: rodar server na 80 e na 443

  const options = {
    key: fs.readFileSync(env.SSL_KEY),
    cert: fs.readFileSync(env.SSl_CERT),
  };
  const secServer = https.createServer(options, app);

  runServer(80, regularServer);
  runServer(443, secServer);
} else {
  const serverPort: number = env.PORT ?? 3333;
  runServer(serverPort, regularServer);
}

// app.listen(env.PORT, () => console.log(`👍Server running at: 🚀${env.PORT}`))
