import { Shape } from "./Shape.js";

export class Triangle extends Shape {
    #color;
    constructor(x, y, color) {
        super(x, y);
        this.#color = color;
    }

    show(canvas) {
        if (!this.element) {
            this.element = document.createElement("div");
            this.element.classList.add("shape");
            this.element.style.width = "0";
            this.element.style.height = "0";
            this.element.style.borderLeft = "60px solid transparent";
            this.element.style.borderRight = "60px solid transparent";
            this.element.style.borderBottom = `120px solid ${this.#color}`;
            this.element.style.left = `${this.x}px`;
            this.element.style.top = `${this.y}px`;
            canvas.appendChild(this.element);
        }
        super.show();
    }
}