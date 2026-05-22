import {Employee} from './Employee.js'; 

export class Worker extends Employee {
    constructor(id, name, baseSalary, hoursWorked, hourlyRate) {
        super(id, name, baseSalary);
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
    }

    calculateSalary() {
        return this.baseSalary + (this.hoursWorked * this.hourlyRate);
    }
}
