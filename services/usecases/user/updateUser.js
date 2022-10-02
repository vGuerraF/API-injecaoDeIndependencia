import { UserEntity } from "../../../entities/user.js";

export class UpdateUserUseCase {
  constructor(userRepository, findUserById) {
    this.repository = userRepository;
    this.findUserById = findUserById;
  }

  async execute(userUpdate, userId) {
    const userToUpdate = await this.findUserById.execute(userId);
    const userModified = Object.assign(userToUpdate, userUpdate);
    const userValidated = new UserEntity(userModified);
    userValidated.validate();
    return this.repository.updateUser(userValidated.getUser());
  }
}
