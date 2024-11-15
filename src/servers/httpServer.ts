import express, { Express } from "express";

import router from "../routes/router"; // Importa il router delle rotte

const PORT = 3000;

export class httpServer {
  private app: Express;
  private static instance: httpServer;

  constructor() {
    this.app = express();
  }
  init() {
    this.app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    this.startMiddleware();
  }

  // function to start middleware here
  startMiddleware() {
    this.app.use(router.router);
  }

  static getInstance(): httpServer {
    if (!httpServer.instance) {
      httpServer.instance = new httpServer();
    }
    return httpServer.instance;
  }
}
