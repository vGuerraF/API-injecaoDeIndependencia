import { randomUUID } from "node:crypto";

export class CharacterEntity {
  constructor(character) {
    this.id = character.id ?? randomUUID();
    this.name = character.name;
    this.image = character.image;
  }

  validate() {
    if (!this.name) {
      throw new Error("Name invalid");
    }

    if (!this.image) {
      throw new Error("Image invalid");
    }
  }

  getCharacter() {
    return {
      id: this.id,
      name: this.name,
      image: this.image,
    };
  }
}
