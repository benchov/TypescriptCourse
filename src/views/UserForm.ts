import { User } from "../models/User";
import { View } from "./View";

export class UserForm extends View {
  onEventHandler(): { [key: string]: () => void } {
    return {
      "click:.change-name": this.onChangeName,
      "mouseenter:h1": this.onHoverHeader,
      "mouseleave:h1": this.onLeaveHeader,
      "click:.set-age": this.onSetAge,
    };
  }

  onSetAge = (): void => {
    console.log("Set Age was pressed");
    this.model.setRandomAge();
  };
  onHoverHeader(): void {
    console.log("H1 Hovered");
  }

  onLeaveHeader(): void {
    console.log("H1 Leaved");
  }

  onChangeName = (): void => {
    const input = this.parent.querySelector("input");
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  template(): string {
    return `
        <div>
            <h1>USER FORM</h1>
            <div>User Name: ${this.model.get("name")}</div>
            <div>User Age: ${this.model.get("age")}</div>
            <input />
            <button class='change-name'>Change Name</button>
            <button class='set-age'>Set Random Age</button>
        </div>
     `;
  }
}
