/* eslint-disable no-useless-constructor */
import Controller from "./controller.js";
import fs from "fs";

class ControllerApp extends Controller {
  constructor(req, res) {
    super(req, res);
  }

  action_getPin() {
    fs.readFile("./backend/data/pin.txt", "utf-8", (err, data) => {
      this.res.status(200).send({
        pin: data,
      });
    });
  }

  action_savePin() {
    const newpin = this.req.body.pin;
    fs.writeFile("./backend/data/pin.txt", newpin, (err) => {
      this.res.status(200).json({
        success: true,
      });
    });
  }
}
export default ControllerApp;
