import { Assessment } from "./Assessment.js";

export class Test extends Assessment {
    #questions;
    #correctAnswers;

    constructor(subject, questions, correctAnswers) {
        super(subject);
        this.#questions = questions;
        this.#correctAnswers = correctAnswers;
    }

    toString() {
        return `Кількість питань - ${this.#questions} | Правильних відповідей - ${this.#correctAnswers}`;
    }
}