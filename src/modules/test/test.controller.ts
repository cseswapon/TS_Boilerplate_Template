import { Request, Response } from "express";

export class TestController {
  async test(req: Request, res: Response): Promise<void> {
    try {
      res.status(200).send({ message: "Test route is ok" });
    } catch (error: any) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
