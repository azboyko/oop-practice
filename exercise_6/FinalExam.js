import { Exam } from "./Exam.js";

export class FinalExam extends Exam {
    #diplomaAccess;

    constructor(subject, maxPoints, studentPoints, diplomaAccess) {
        super(subject, maxPoints, studentPoints);
        this.#diplomaAccess = diplomaAccess;
    }

    toString() {
        return `Допуск до диплома - ${this.#diplomaAccess ? 'є' : 'немає'}`;
    }
}