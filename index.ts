import { Express } from "express";

import dotenv from "dotenv";

dotenv.config();


const serverapp: Express = require("express")();
const port: string = process.env.PING_LISTEN_PORT || '3000';


serverapp.set("json spaces", 6);

serverapp.get("/ping", (req, res) => {
    res.json(req.headers);

});


serverapp.get('*', (req, res) => {
    res.status(404).json({ code: 404 });
});



serverapp.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}.\nSur http://localhost:${port}`)
});
