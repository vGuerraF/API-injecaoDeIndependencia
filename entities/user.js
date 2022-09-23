import { randomUUID } from "node:crypto";
import { CharacterEntity } from "./character.js";

export class UserEntity {
  constructor(user) {
    this.id = user.id ?? randomUUID();
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.image = user.image;
    this.characters = user.characters ?? [];
  }

  validate() {
    if (!this.name || !this.email || !this.password || !this.image) {
      throw new Error("Invalid user params");
    }
  }

  addCharacter(character) {
    const newCharacter = new CharacterEntity(character);
    newCharacter.validate();
    this.characters.push({ ...newCharacter.getCharacter(), userId: this.id });
  }

  getUser() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      image: this.image,
      characters: this.characters,
    };
  }
}
