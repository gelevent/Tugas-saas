export class Todo {
    constructor(title) {
        this.title = title;
        this.completed = false;
    }

    toggle() {
        this.completed = !this.completed;
    }
}
