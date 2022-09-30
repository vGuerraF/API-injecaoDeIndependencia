import { UserRepositoryMongoDb } from "./database/repository/userRepository.js";
import { CreateUserUseCase } from "./services/usecases/user/createUser.js";
import { MongoDbConnection } from "./database/mongo/connection/connect.js";

const connection = new MongoDbConnection();
await connection.ConnectDb();
const repository = new UserRepositoryMongoDb();
const createUserUseCase = new CreateUserUseCase(repository);


const newUserr = await createUserUseCase.execute({
    name: "vncius",
    email: "vinicus@gmail.com",
    password: "12345v",
    image: "http://image.com"
})

console.log(newUserr)