import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const user = User.buildUser({ name: "Marci", age: 11 });

const root = document.getElementById("root");
console.log("999 ", root);
if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();

  console.log("UserEdit ", userEdit);
} else {
  throw new Error("Something goes wrong!");
}
