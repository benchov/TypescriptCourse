import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel = (): void => {
    this.model.on("change", () => {
      this.render();
    });
  };

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

  onChangeName(): void {
    console.log("NameChanged");
  }
  onChangeName = (): void => {

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

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.onEventHandler();

    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
