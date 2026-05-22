import { Assessment } from "./Assessment.js";

export class Trial extends Assessment {
    #tasks;
    #completedTasks;

    constructor(subject, tasks, completedTasks) {
        super(subject);
        this.#tasks = tasks;
        this.#completedTasks = completedTasks;
    }

    toString() {
        return `Виконано завдань - ${this.#completedTasks}/${this.#tasks}`;
    }
}