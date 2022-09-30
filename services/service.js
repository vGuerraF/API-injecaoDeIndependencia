export class Service {
  constructor(
    createUseCase,
    updateUseCase,
    findAllUseCase,
    findByIdUseCase,
    deleteUseCase
  ) {
    this.createUseCase = createUseCase;
    this.updateUseCase = updateUseCase;
    this.findAllUseCase = findAllUseCase;
    this.findByIdUseCase = findByIdUseCase;
    this.deleteUseCase = deleteUseCase;
  }

  async create(data) {
    return await this.createUseCase.execute(data);
  }

  async update(data, id) {
    return await this.updateUseCase.execute(data, id);
  }

  async findAll() {
    return await this.findAllUseCase.execute();
  }

  async findById(id) {
    return await this.findByIdUseCase.execute(id);
  }

  async delete(id) {
    return await this.deleteUseCase.execute(id);
  }
}
