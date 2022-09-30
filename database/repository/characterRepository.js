import { characterDb } from "../mongo/schemas/character";

export class characterRepositoryMongoDb {
  async create(character) {
    return await characterDb.create(character);
  }

  async deleteCharacter(characterId) {
    return await characterDb.findOneAndDelete(characterId);
  }

  async findAll() {
    return await characterDb.find();
  }

  async find(characterId) {
    return await characterDb.findOne({ id: characterId });
  }

  async findByName(characterName) {
    return await characterDb.find({ name: characterName });
  }

  async updateCharacter(character) {
    return await characterDb.findOneAndUpdate({ id: character.id }, character, {
      new: true,
    }); 
  }
}
