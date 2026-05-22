import { Assessment } from "./Assessment.js";

export class Exam extends Assessment {
    #maxPoints;
    #studentPoints;

    constructor(subject, maxPoints, studentPoints) {
        super(subject);
        this.#maxPoints = maxPoints;
        this.#studentPoints = studentPoints;
    }

    toString() {
        return `Максимум балів - ${this.#maxPoints} | Отримано балів - ${this.#studentPoints}`;
    }
}