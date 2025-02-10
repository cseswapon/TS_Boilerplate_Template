import express, { Router } from "express";
import { TestController } from "./test.controller";

const testController = new TestController();

const router: Router = express.Router();

router.get("/test", testController.test);

export default router;
