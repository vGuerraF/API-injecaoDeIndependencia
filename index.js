import { characterRepositoryMongoDb } from "./database/repository/characterRepository.js";
import { UserRepositoryMongoDb } from "./database/repository/userRepository.js";
import { MongoDbConnection } from "./database/mongo/connection/connect.js";
import { CreateUserUseCase } from "./services/usecases/user/createUser.js";
import { UpdateUserUseCase } from "./services/usecases/user/updateUser.js";
import { FindUserByIdUseCase } from "./services/usecases/user/findUserById.js";
import { FindAllUsersUseCase } from "./services/usecases/user/findAllUsers.js";
import { DeleteUserUseCase } from "./services/usecases/user/deleteUser.js";
import { Service } from "./services/service.js";
import { Controller } from "./controllers/controller.js";

const ConnectDb = new MongoDbConnection();
await ConnectDb.ConnectDb();

const userRepository = new UserRepositoryMongoDb();
const characterRepository = new characterRepositoryMongoDb();

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

userController.create({
  body: {
    name: "Guerra",
    email: "geurra@gmail.com",
    password: "senhaforte",
    image: "http://imagemqualquer.com.br",
  },
});

console.log(userController);
