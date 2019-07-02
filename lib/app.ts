import * as express from "express";
import * as bodyParser from "body-parser";
import calc from "./calc";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    // Simple calc route that expects action and two numbers, left and right
    this.app.get("/calc", (request, response) => {
      const { action, left, right } = request.query;
      const result = calc.performCalculation(action, left, right);
      return response.json({
        result
      });
    });
  }
}

export default new App().app;
