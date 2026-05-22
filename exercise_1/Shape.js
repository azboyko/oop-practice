export class Shape {
    #x;
    #y;
    element;
    visible = true;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }
    get y() {
        return this.#y;
    }

    move(newX, newY) {
        this.#x = newX;
        this.#y = newY;
        if (this.element) {
            this.element.style.left = `${newX}px`;
            this.element.style.top = `${newY}px`;
        }

    }

    show() {
        if (this.element) {
            this.element.style.display = "block";
        }
        this.visible = true;
    }

    hide() {
        if (this.element) {
            this.element.style.display = "none";
        }
        this.visible = false;
    }

    toggle() {
        if (this.visible) {
            this.hide();
        } else {
            this.show();
        }
    }
}