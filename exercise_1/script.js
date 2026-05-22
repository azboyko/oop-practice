import { Circle } from "./Circle.js";
import { Rectangle } from "./Rectangle.js";
import { Triangle } from "./Triangle.js";

const canvas = document.querySelector("#canvas");


const circle = new Circle(100, 100, 80, "red");
circle.show(canvas);

const rectangle = new Rectangle(350, 150, 180, 100, "blue");
rectangle.show(canvas);

const triangle = new Triangle(700, 150, "green");
triangle.show(canvas);


// ================= КОЛО =================

document.querySelector(".toggle-circle")
    .addEventListener("click", () => {
        circle.toggle();
    });

document.querySelector(".circle-up")
    .addEventListener("click", () => {
        circle.move(circle.x, circle.y - 20);
    });

document.querySelector(".circle-down")
    .addEventListener("click", () => {
        circle.move(circle.x, circle.y + 20);
    });

document.querySelector(".circle-right")
    .addEventListener("click", () => {
        circle.move(circle.x + 20, circle.y);
    });

document.querySelector(".circle-left")
    .addEventListener("click", () => {
        circle.move(circle.x - 20, circle.y);
    });


// ================= ПРЯМОКУТНИК =================

document.querySelector(".toggle-rectangle")
    .addEventListener("click", () => {
        rectangle.toggle();
    });

document.querySelector(".rectangle-up")
    .addEventListener("click", () => {
        rectangle.move(rectangle.x, rectangle.y - 20);
    });

document.querySelector(".rectangle-down")
    .addEventListener("click", () => {
        rectangle.move(rectangle.x, rectangle.y + 20);
    });

document.querySelector(".rectangle-right")
    .addEventListener("click", () => {
        rectangle.move(rectangle.x + 20, rectangle.y);
    });

document.querySelector(".rectangle-left")
    .addEventListener("click", () => {
        rectangle.move(rectangle.x - 20, rectangle.y);
    });


// ================= ТРИКУТНИК =================

document.querySelector(".toggle-triangle")
    .addEventListener("click", () => {
        triangle.toggle();
    });

document.querySelector(".triangle-up")
    .addEventListener("click", () => {
        triangle.move(triangle.x, triangle.y - 20);
    });

document.querySelector(".triangle-down")
    .addEventListener("click", () => {
        triangle.move(triangle.x, triangle.y + 20);
    });

document.querySelector(".triangle-right")
    .addEventListener("click", () => {
        triangle.move(triangle.x + 20, triangle.y);
    });

document.querySelector(".triangle-left")
    .addEventListener("click", () => {
        triangle.move(triangle.x - 20, triangle.y);
    });