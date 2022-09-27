import { randomUUID } from "node:crypto";

export class CharacterEntity {
  constructor(character, userId) {
    this.id = character.id ?? randomUUID();
    this.name = character.name;
    this.image = character.image;
    this.userId = userId;
  }

  validate() {
    if (!this.name) {
      throw new Error("Name invalid");
    }

    if (!this.image) {
      throw new Error("Image invalid");
    }

    if (!this.userId) {
      throw new Error("User id not found");
    }
  }

  getCharacter() {
    return {
      id: this.id,
      name: this.name,
      image: this.image,
      userId: this.userId,
    };
  }
}
