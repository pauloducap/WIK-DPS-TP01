"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const serverapp = require("express")();
const port = process.env.PING_LISTEN_PORT || '3000';
serverapp.set("json spaces", 6);
serverapp.get("/ping", (req, res) => {
    res.json(req.headers);
});
serverapp.get('*', (req, res) => {
    res.status(404).json({ code: 404 });
});
serverapp.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}.\nSur http://localhost:${port}`);
});
