import { characterRepositoryMongoDb } from "../database/repository/characterRepository.js";
import { CreateCharacterUseCase } from "../services/usecases/character/createCharacter.js";
import { FindCharacterByIdUseCase } from "../services/usecases/character/findCharacterById";
import { UpdateCharacterUseCase } from "../services/usecases/character/updateCharacter.js";
import { CharacterDeleteUseCase } from "../services/usecases/character/deleteCharacter.js";
import { FindCharacterByNameUseCase } from "../services/usecases/character/findCharacterByName.js";
import { FindAllCharactersUseCase } from "../services/usecases/character/findAllCharacters.js";
import { Service } from "../services/service.js";
import { CharacterController } from "../controllers/characterController.js";
import { CharacterRoute } from "../routes/characterRoutes.js";

export function makeCharacterFactory(router) {
  const characterRepository = new characterRepositoryMongoDb();

  const createCharacterUseCase = new CreateCharacterUseCase(
    characterRepository
  );
  const findCharacterByIdUseCase = new FindCharacterByIdUseCase(
    characterRepository
  );
  const updateCharacterUseCase = new UpdateCharacterUseCase(
    characterRepository,
    findCharacterByIdUseCase
  );
  const deleteCharacterUseCase = new CharacterDeleteUseCase(
    characterRepository
  );
  const findCharacterByNameUseCase = new FindCharacterByNameUseCase(
    characterRepository
  );
  const findAllCharactersUseCase = new FindAllCharactersUseCase();

  const characterService = new Service(
    createCharacterUseCase,
    updateCharacterUseCase,
    findAllCharactersUseCase,
    findCharacterByIdUseCase,
    deleteCharacterUseCase
  );

  const characterController = new CharacterController(
    characterService,
    findCharacterByNameUseCase
  );

  const characterRoute = new CharacterRoute(characterController, router);

  return characterRoute;
}
