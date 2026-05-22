import { Teacher } from "./Teacher.js";

export class HeadOfDepartment extends Teacher {
    #department;

    constructor(name, age, email, subject, department) {
        super(name, age, email, subject);
        this.#department = department;
    }

    showRole() {
        return `\nЯ завідувач кафедри ${this.#department} і викладач ${this.getSubject()} `
    }

}