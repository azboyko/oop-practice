import { Shape } from "./Shape.js";

export class Circle extends Shape {
    #size;
    #color;

    constructor(x, y, size, color) {
        super(x, y);
        this.#size = size;
        this.#color = color;
    }

    show(canvas) {
        if (!this.element) {
            this.element = document.createElement("div");
            this.element.classList.add("shape");
            this.element.style.width = `${this.#size}px`;
            this.element.style.height = `${this.#size}px`;
            this.element.style.borderRadius = "50%";
            this.element.style.background = this.#color;
            this.element.style.left = `${this.x}px`;
            this.element.style.top = `${this.y}px`;
            canvas.appendChild(this.element);
        }
        super.show();
    }
}