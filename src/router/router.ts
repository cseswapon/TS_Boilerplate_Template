import express, { Router, Request, Response } from "express";
import { ModuleRoute } from "../interface";
import testRoute from "../modules/test/test.route";
const router: Router = express.Router();

const moduleRouters: ModuleRoute[] = [{ path: "/", route: testRoute }];

moduleRouters.forEach((route) => router.use(route.path, route.route));

router.use((req: Request, res: Response) => {
  res.status(404).json({
    error: "Not Found",
    message: `${req.originalUrl} - This route is not found`,
  });
});

export default router;
