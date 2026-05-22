// 6 Розробити ієрархію класів для представлення наступних сутностей. Тест, іспит,
// випускний іспит, випробування. Визначити необхідні атрибути і методи. Реалізувати
// як мінімум, один поліморфний метод для перевизначення у всіх класах ієрархії.

import { Assessment } from "./Assessment.js";
import { Test } from "./Test.js";
import { Exam } from "./Exam.js";
import { FinalExam } from "./FinalExam.js";
import { Trial } from "./Trial.js";

const check1 = new Assessment("Географія");
console.log(check1.showType());

const check2 = new Test("Математика", 20, 18);
console.log(check2.showType());
console.log(check2.toString());

const check3 = new Exam("Програмування", 100, 75);
console.log(check3.showType());
console.log(check3.toString());

const check4 = new FinalExam( "Комп'ютерні мережі", 100, 90,true);
console.log(check4.showType());
console.log(check4.toString());

const check5 = new Trial("Фізична підготовка", 10, 8);
console.log(check5.showType());
console.log(check5.toString());