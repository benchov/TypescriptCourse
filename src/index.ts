import { User } from "./models/User";

const user = new User({ name: "Francis" });

console.log(user.get("name"));

user.on("change", () => {
  console.log("The user was changed");
});

user.set({ name: "Daniel Silverado", age: 73 });
console.log(user.get("name"));
