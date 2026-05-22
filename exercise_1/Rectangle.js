import { Shape } from "./Shape.js";

export class Rectangle extends Shape {
    #width;
    #height;
    #color;
    constructor(x, y, width, height, color) {
        super(x, y);
        this.#width = width;
        this.#height = height;
        this.#color = color;
    }

    show(canvas) {
        if (!this.element) {
            this.element = document.createElement("div");
            this.element.classList.add("shape");
            this.element.style.width = `${this.#width}px`;
            this.element.style.height = `${this.#height}px`;
            this.element.style.background = this.#color;
            this.element.style.left = `${this.x}px`;
            this.element.style.top = `${this.y}px`;
            canvas.appendChild(this.element);
        }

        super.show();
    }
}