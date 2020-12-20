import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  onEventHandler(): { [key: string]: () => void } {
    return {
      "click:.change-name": this.onChangeName,
      "mouseenter:h1": this.onHoverHeader,
      "mouseleave:h1": this.onLeaveHeader,
      "click:.set-age": this.onSetAge,
      "click:.save-form": this.onSave,
    };
  }

  onSave = (): void => {
    this.model.save();
  };

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
            <input placeholder="${this.model.get("name")}"/>
            <button class='change-name'>Change Name</button>
            <button class='set-age'>Set Random Age</button>
            <button class='save-form'>Save</button>
        </div>
     `;
  }
}
