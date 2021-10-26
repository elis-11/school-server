import express from "express";
import cors from "cors";
// import fs from "fs";
import ControllerApp from "./controllers/controllerApp.js";

const app = express();
const port = 3023;

app.use(cors());
app.use(express.json());

app.post('/controller*', (req, res) => {
    switch (req.path) {
        case '/controllerApp':
            const controller = new ControllerApp(req, res);
            controller.process();
            break;
        default:
            throw new Error('bad controller');
    }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
