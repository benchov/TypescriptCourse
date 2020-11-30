import { User } from "./models/User";

const user = new User({ id: 1, name: "Lucsi Kutya", age: 13 });

user.on("save", () => {
  console.log(user);
});

user.save();
