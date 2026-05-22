/*
Розробити ієрархію класів для представлення наступних сутностей. Персона,
студент, викладач, завідувач кафедри. В класах визначити атрибути і необхідні
методи. Реалізувати як мінімум, один поліморфний метод для перевизначення у всіх
класах ієрархії.
*/
import { Person } from "./Person.js";
import { Student } from "./Student.js";
import { Teacher } from "./Teacher.js";
import { HeadOfDepartment } from "./HeadOfDepartment.js";

const person1 = new Person("Іван", 40, "ivanzvaruch@gmail.com");
console.log(person1.showRole())
console.log(person1.toString())

const person2 = new Student("Настя", 18, "nastiaboiko0210@gmail.com", "КБ-107", "дівчина");
console.log(person2.showRole())
console.log(person2.toString())

const person3 = new Teacher("Тарас", 38, "taraskachmaryk@gmail.com", "англійської мови");
console.log(person3.showRole())
console.log(person3.toString())

const person4 = new HeadOfDepartment("Зеновій", 43, "zenovijboiko@gmail.com", "Комплексних систем захисту інформації", "кібербезпеки");
console.log(person4.showRole())
console.log(person4.toString())