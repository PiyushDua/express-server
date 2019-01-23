import * as express from "express";
import * as bodyParser from "body-parser";
import { errorHandler, notFoundRoute } from "./libs/routes";
class Server {
  private app: express.Express;
  constructor(private config) {
    this.app = express();
    console.log("index");
  }

  public bootstrap() {
    console.log("Inside bootstrap");
    this.setupRoutes();
    this.initBodyParser();
    return this;
  }

  public setupRoutes() {
    console.log("Inside setupRoutes");
    const { app } = this;
    app.use("/health-check", (req, res) => {
      res.send("I am OK");
    });
    app.use(notFoundRoute);
    app.use(errorHandler);
  }

  public run() {
    const {
      app,
      config: { port }
    } = this;
    app.listen(port, err => {
      if (err) {
        throw err;
      }
      console.log(`App is running on ${port}`);
    });
  }

  private initBodyParser() {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }
}

export default Server;
