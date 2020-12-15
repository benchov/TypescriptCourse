export class UserForm {
  constructor(public parent: Element) {}

  onEventHandler(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
    };
  }

  onButtonClick(): void {
    console.log("Button Clicked");
  }

  template(): string {
    return `
        <div>
            <h1>USER FORM</h1>
            <input />
        </div>
     `;
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}
