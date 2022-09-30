export class FindAllUsersUseCase {
  constructor(userRepository) {
    this.repository = userRepository;
  }

  async execuse() {
    return await this.repository.findAll();
  }
}
