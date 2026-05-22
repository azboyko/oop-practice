// 2 Розробити ієрархію класів для представлення інформації про працівників деякого
// підприємства. Забезпечити представлення у вигляді класів всіх можливих ланок:
// робітник керівник цеху начальник відділу керівник підприємства. Забезпечити
// наявність методу для нарахування зарплати. Метод для обчислення зарплати
// повинен бути поліморфним. Формулу нарахування вибрати довільно,

import { Worker } from './Worker.js';
import { ShopManager } from './ShopManager.js';//працівник цеху
import { DepartmentHead } from './DepartmentHead.js'; // начальник
import { EnterpriseDirector } from './EnterpriseDirector.js'// керівник підприємства

const staff = [];

function addEmployee(ClassRef, id, name, ...args) {

    for (const emp of staff) {
        if (emp.id === id) {
            console.log(`❌ Помилка: ID "${id}" вже зайнятий! ${name} не доданий.`);
            return;
        }
    }

    const newEmployee = new ClassRef(id, name, ...args);
    staff.push(newEmployee);

    console.log(`| Успішно додано: ${name} (ID: ${id})`);
}

// Додаємо робітників (Worker)
addEmployee(Worker, "101", "Іван Петренко", 15000, 160, 50);
addEmployee(Worker, "101", "Олена Сидоренко", 20000, 150, 60);
addEmployee(Worker, "102", "Олена Сидоренко", 20000, 150, 60);

// Керівник цеху (ShopManager)
addEmployee(ShopManager, "201", "Микола Василенко", 25000, 1.2, 4000);

// Начальник відділу (DepartmentHead)
addEmployee(DepartmentHead, "301", "Тетяна Шевченко", 35000, 8, 500);

// Керівник підприємства (EnterpriseDirector)
addEmployee(EnterpriseDirector, "401", "Олександр Мельник", 60000, 300000, 0.02);



console.log("\nСписок працівників у штаті:");
console.log(staff);


console.log("\n--- Розрахунок зарплати ---");

for (const emp of staff) {
    console.log(`ID: ${emp.id} | ${emp.name} | До виплати: ${emp.calculateSalary()} грн.`);
}