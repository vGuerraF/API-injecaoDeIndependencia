export class UserRoute {
  constructor(controller, router) {
    this.controller = controller;
    this.router = router;
  }

  route() {
    this.router.get("/", (req, res) => this.controller.findAll(req, res));
    this.router.post("/create", (req, res) => this.controller.create(req, res));
    this.router.patch("/update/:id", (req, res) => this.controller.update(req, res));
    this.router.delete("/delete/:id", (req, res) => this.controller.delete(req, res));
    this.router.get("/find/:id", (req, res) => this.controller.findById(req, res));
    return this.router;
  }
}
