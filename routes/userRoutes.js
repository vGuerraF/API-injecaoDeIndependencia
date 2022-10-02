export class UserRoute {
  constructor(controller, router) {
    this.controller = controller;
    this.router = router;
  }

  route() {
    router.get("/", this.controller.findAll());
    router.post("/create", this.controller.create());
    router.patch("/update/:id", this.controller.update());
    router.delete("/delete/:id", this.controller.delete());
    router.get("/find/:id", this.controller.findById());
  }
}
