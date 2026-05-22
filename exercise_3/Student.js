import { Person } from "./Person.js";

export class Student extends Person {
    #group;
    #gender;

    constructor(name, age, email, group, gender) {
        super(name, age, email);
        this.#group = group;
        this.#gender = gender;
    }

    showRole() {
        return `\nЯ ${this.#gender === 'дівчина' ? 'студентка' : 'студент'} групи ${this.#group}`
    }
}