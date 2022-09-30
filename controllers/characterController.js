import { Controller } from "./controller.js";

export class CharacterController extends Controller {
  constructor(service, findCharacterByName) {
    super(service), (this.findCharacterByName = findCharacterByName);
  }

  async findByName(req, res) {
    try {
      const name = req.body.name;
      const response = await this.findCharacterByName.execute(name);
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
  }
}
