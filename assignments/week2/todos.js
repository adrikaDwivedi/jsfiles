class Todo{
    constructor(){
        this.todos = [];
    }

    add(task){
        this.todos.push(task);
    }
    remove(indexOfTodo){
        if(indexOfTodo >=0 && indexOfTodo < this.todos.length){
            this.todos.splice(indexOfTodo,1);
        }
    }
    update(index, newTodo){
        if(index >=0 && index < this.todos.length){
          this.todos[index] = newTodo;
        }
    }
    getAll(){
        return this.todos;
    }
    get(index){
        if(index >=0 && index < this.todos.length){
            return this.todos[index];
        }
        else{
            return ("task not found, check again");
        }
    }
    clear(){
        this.todos = [];
    }
}
const t = new Todo();
t.add("task 1");
t.add("task 2");
t.add("task 3");
console.log(t.getAll());

t.update(1, "updated task 2");
console.log(t.getAll());

console.log(t.get(2));