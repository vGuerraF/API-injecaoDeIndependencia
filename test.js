import { UserEntity } from "./entities/user.js";

const newuser = new UserEntity({
    name: "vinicius",
    email: "inivnic@gmail.com",
    password: "123545d",
    image: "image",
})

newuser.addCharacter({
    name: "tomam",
    image: "https://asdsa"
})

console.log(newuser.getUser())