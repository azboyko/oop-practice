import { Employee } from './Employee.js';

export class EnterpriseDirector extends Employee {
    constructor(id, name, baseSalary, companyProfit, directorKpi) {
        super(id, name, baseSalary);
        this.companyProfit = companyProfit;
        this.directorKpi = directorKpi; 
    }

    calculateSalary() {
        return this.baseSalary + (this.companyProfit * this.directorKpi);
    }
}