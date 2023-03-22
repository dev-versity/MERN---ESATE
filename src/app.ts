import express, { Application } from "express";
import mongoose from "mongoose";
import "dotenv/config";
import Controller from "./utils/interfaces/controller.interface";

class App {
  public express: Application;
  public port: number;

  constructor(controllers: Controller[], port: number) {
    this.express = express();
    this.port = port;

    this.initializeDatabaseConnection();
    this.initializeMiddleware();
    this.initializeControllers(controllers);
  }
  private initializeMiddleware(): void {
    this.express.use(express.urlencoded({ extended: false }));
  }
  private initializeDatabaseConnection(): void {
    const { MONGODB_URI } = process.env;
    main().catch((err) => console.log(err));

    async function main() {
      await mongoose.connect(MONGODB_URI);
      console.log("Connected to MongoDB");
    }
  }
  public listen(): void {
    this.express.listen(this.port, () => {
      console.log(`listening on port ${this.port}`);
    });
  }
  private initializeControllers(controllers: Controller[]): void {
    controllers.forEach((controller: Controller) => {
      this.express.use("/api", controller.router)
    });
  }
}

export default App;
