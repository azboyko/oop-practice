export class Employee {
    #id;
    #name;
    #baseSalary;

    constructor(id, name, baseSalary) {
        this.id = id;
        this.name = name;
        this.baseSalary = baseSalary;
    }

    calculateSalary(){
        return `Зарплата даного працівгника ${this.#baseSalary}`;
    }

}