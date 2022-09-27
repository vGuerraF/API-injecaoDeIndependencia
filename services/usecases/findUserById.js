export class FindUserByIdUseCase {
  constructor(userRepository) {
    this.repository = userRepository;
  }

  async execute(userId) {
    let userFinded;
    if (!userId) {
      throw new Error("User id sended is invalid");
    }

    userFinded = await this.repository.findById(userId);
    return userFinded;
  }
}
