import { UserRepositoryMongoDb } from "../database/repository/userRepository.js";
import { CreateUserUseCase } from "../services/usecases/user/createUser.js";
import { UpdateUserUseCase } from "../services/usecases/user/updateUser.js";
import { FindUserByIdUseCase } from "../services/usecases/user/findUserById.js";
import { FindAllUsersUseCase } from "../services/usecases/user/findAllUsers.js";
import { DeleteUserUseCase } from "../services/usecases/user/deleteUser.js";
import { Service } from "../services/service.js";
import { Controller } from "../controllers/controller.js";
import { UserRoute } from "../routes/userRoutes.js";

export function makeUserFactory(router) {
  const userRepository = new UserRepositoryMongoDb();

  const createUserUseCase = new CreateUserUseCase(userRepository);
  const findByIdUseCase = new FindUserByIdUseCase(userRepository);
  const updateUserUseCase = new UpdateUserUseCase(
    userRepository,
    findByIdUseCase
  );
  const findAllUsersUseCase = new FindAllUsersUseCase(userRepository);
  const deleteUserUseCase = new DeleteUserUseCase(userRepository);

  const useService = new Service(
    createUserUseCase,
    updateUserUseCase,
    findAllUsersUseCase,
    findByIdUseCase,
    deleteUserUseCase
  );

  const userController = new Controller(useService);

  const userRoute = new UserRoute(userController, router);

  return userRoutes;
}
