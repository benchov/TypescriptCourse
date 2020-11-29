import { User } from "./models/User";

const user = new User({ name: "Francis" });

console.log(user.get("name"));

user.on("change", () => {
  console.log("The was changed");
});

user.trigger("change");
