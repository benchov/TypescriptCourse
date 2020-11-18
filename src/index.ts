import { User } from "./models/User";

const user = new User({ id: 3 });
// user.delete();

user.set({ name: "Norm Fac", age: 43 });
user.save();
