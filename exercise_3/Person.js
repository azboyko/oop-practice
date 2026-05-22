export class Person {
    #name;
    #age;
    #email;

    constructor(name, age, email) {
        this.#name = name;
        this.#age = age;
        this.#email = email;
    }

    showRole() {
        return `\nЯ персона`;
    }

    toString() {
        return `Ім'я - ${this.#name} \nВік - ${this.#age} \nЕлектронна адреса - ${this.#email}`;
    }

}