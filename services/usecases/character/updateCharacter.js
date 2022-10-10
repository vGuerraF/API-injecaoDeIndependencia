import { CharacterEntity } from "../../../entities/character.js";

export class UpdateCharacterUseCase {
  constructor(characterRepository, findCharacterById) {
    this.repository = characterRepository;
    this.findCharacterById = findCharacterById;
  }

  async execute(character, characterId) {
    const characterFinded = await this.findCharacterById.execute(characterId);
    const characterModified = Object.assign(characterFinded, character);
    const characterValidated = new CharacterEntity(characterModified);
    characterValidated.validate();
    return await this.repository.updateCharacter(
      characterValidated.getCharacter()
    );
  }
}
