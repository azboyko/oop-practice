import { Employee } from './Employee.js';

export class DepartmentHead extends Employee {
    constructor(id, name, baseSalary, numberOfSubordinates, bonusPerSubordinate) {
        super(id, name, baseSalary);
        this.numberOfSubordinates = numberOfSubordinates;
        this.bonusPerSubordinate = bonusPerSubordinate;
    }

    calculateSalary() {
        return this.baseSalary + (this.numberOfSubordinates * this.bonusPerSubordinate);
    }
}