import express, { Application, Request, Response } from "express";
import os from "os";
import router from "./router/router";

const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  try {
    const time = new Date().toLocaleString("en-GB", { timeZone: "UTC" });
    res.send({
      message: "Hi Baby Programer !!!",
      time,
    });
  } catch (error: any) {
    res.status(404).send({ message: error.message });
  }
});

app.get("/details", (req: Request, res: Response) => {
  try {
    res.send({
      ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
      osNetworkInfo: os.networkInterfaces(),
    });
  } catch (error) {}
});

app.use(router);

export default app;
