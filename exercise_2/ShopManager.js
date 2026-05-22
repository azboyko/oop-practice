import {Employee} from './Employee.js';

export class ShopManager extends Employee {
    constructor(id, name, baseSalary, efficiencyCoefficient, shopBonus) {
        super(id, name, baseSalary);
        this.efficiencyCoefficient = efficiencyCoefficient;
        this.shopBonus = shopBonus;
    }

    calculateSalary() {
        return (this.baseSalary * this.efficiencyCoefficient) + this.shopBonus;
    }
}