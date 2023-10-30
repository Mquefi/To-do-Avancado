// SELEÇÃO DE ELEMENTOS
const insertForm = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const todoEdit = document.querySelector("#todoEdit");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

// FUNÇÕES
const saveTodo = (text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    

    console.log(todo);
}

// EVENTOS
insertForm.addEventListener ("submit", (e) => {
    e.preventDefault ();

    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue)
    }
});