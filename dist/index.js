"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    try {
        const time = new Date().toLocaleString("en-GB", { timeZone: "UTC" });
        res.send({
            message: "Hi Baby Programer !!!",
            time,
        });
    }
    catch (error) {
        res.status(404).send({ message: error.message });
    }
});
app.get("/details", (req, res) => {
    try {
        res.send({
            ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
            osNetworkInfo: os_1.default.networkInterfaces(),
        });
    }
    catch (error) { }
});
exports.default = app;
