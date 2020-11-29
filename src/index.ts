import { User } from "./models/User";

const user = new User({ name: "Francis" });

console.log(user.get("name"));
