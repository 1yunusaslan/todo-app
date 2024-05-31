const addButton = document.getElementById("button-add");
const inputValue = document.getElementById("input-value");




const todoDiv = document.getElementById("todosContainer");
const renderTodoItem = (todoText) => {
    

    const todoItem = document.createElement("p");
    todoItem.innerText=todoText;
    todoItem.classList.add('todo-p');

    const completeButton = document.createElement("button");
    completeButton.innerText= "Complete";
    completeButton.addEventListener('click', () =>{
        todoItem.classList.add('todo-complete-p');
    });
    completeButton.classList.add('completeButton');

    const deleteButton = document.createElement("button");
    deleteButton.innerText= "Delete";
    deleteButton.classList.add('deleteButton');

    deleteButton.addEventListener('click',() =>{
        todoDiv.removeChild(layoutDiv);
    })


    const layoutDiv = document.createElement("div");
    layoutDiv.classList.add('todos-item-layout');

   
    layoutDiv.appendChild(completeButton);
    layoutDiv.appendChild(deleteButton);
    layoutDiv.appendChild(todoItem);

    todoDiv.appendChild(layoutDiv);

    inputValue.value ="";
}

addButton.addEventListener("click", () =>{
    if(inputValue.value === ""){
        alert("Input boş bırakılamaz.");
    }
    else{
        renderTodoItem(inputValue.value);
    }
});
