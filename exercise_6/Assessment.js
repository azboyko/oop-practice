export class Assessment {
    #subject;

    constructor(subject) {
        this.#subject = subject;
    }

    showType() {
        return `\nПредмет - ${this.#subject}`;
    }
}