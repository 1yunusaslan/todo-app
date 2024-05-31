const addButton = document.getElementById("form__button");
const inputValue = document.getElementById("form__input");




const todoDiv = document.getElementById("todosContainer");
const renderTodoItem = (todoText) => {
    

    const todoItem = document.createElement("p");
    todoItem.innerText=todoText;
    todoItem.classList.add('todos__p');

    const completeButton = document.createElement("button");
    completeButton.innerText= "Complete";
    completeButton.addEventListener('click', () =>{
        todoItem.classList.add('todo__complete-p');
    });
    completeButton.classList.add('completeButton');

    const deleteButton = document.createElement("button");
    deleteButton.innerText= "Delete";
    deleteButton.classList.add('deleteButton');

    deleteButton.addEventListener('click',() =>{
        todoDiv.removeChild(layoutDiv);
    })


    const layoutDiv = document.createElement("div");
    layoutDiv.classList.add('todos__item-layout');

   
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
