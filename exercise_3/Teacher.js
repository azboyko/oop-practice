import { Person } from "./Person.js";

export class Teacher extends Person {
    #subject;

    constructor(name, age, email, subject) {
        super(name, age, email);
        this.#subject = subject;
    }

    showRole() {
        return `\nЯ викладач ${this.#subject} `
    }

    getSubject() {
        return this.#subject;
    }
}