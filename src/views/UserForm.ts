import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  onEventHandler(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
      "mouseenter:h1": this.onHoverHeader,
    };
  }

  onHoverHeader(): void {
    console.log("H1 Hovered");
  }

  onButtonClick(): void {
    console.log("Button Clicked");
  }

  template(): string {
    return `
        <div>
            <h1>USER FORM</h1>
            <div>User Name: ${this.model.get("name")}</div>
            <div>User Age: ${this.model.get("age")}</div>
            <input />
            <button>Click Me</button>
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
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
