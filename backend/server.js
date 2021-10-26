import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const port = 3023;

app.use(cors());
app.use(express.json());

app.get("/getpin", (req, res) => {
  fs.readFile("./backend/data/pin.txt", "utf-8", (err, data) => {
    res.status(200).send({
      pin: data,
    });
  });
});

app.post("/savepin", (req, res) => {
  const newpin = req.body.pin;
  fs.writeFile("./backend/data/pin.txt", newpin, (err) => {
    res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
