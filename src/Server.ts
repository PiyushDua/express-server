import * as express from "express";
class Server {
  private app: express.Express;
  constructor(private config) {
    this.app = express();
    console.log("index");
  }

  public bootstrap() {
    console.log("Inside bootstrap");
    this.setupRoutes();
    return this;
  }

  public setupRoutes() {
    console.log("Inside setupRoutes");
    const { app } = this;
    app.use("/health-check", (req, res) => {
      res.send("I am OK");
    });
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
}

export default Server;
