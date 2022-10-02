export class FindCharacterByIdUseCase {
  constructor(characterRepository) {
    this.repository = characterRepository;
  }

  async execute(characterId) {
    const characterFinded = await this.repository.find(characterId);
    if (!characterFinded) {
      throw new Error("Could not find this character:" + characterId);
    }
    return characterFinded;
  }
}
