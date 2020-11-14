import { User } from "./models/User";

//TEST LINE
const user = new User({ name: "Lucsisson Gelufrik", age: 14 });
console.log(user.get("name"));
console.log(user.get("age"));
