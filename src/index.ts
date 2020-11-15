import { User } from "./models/User";

//TEST LINE
const user = new User({ name: "Lucsisson Gelufrik", age: 14 });

// user.set({ name: "Daniel Silverado", age: 56 });

// console.log(user.get("name"));
// console.log(user.get("age"));

user.on("change", () => {});
user.on("change", () => {});
user.on("test", () => {});

console.log(user);
