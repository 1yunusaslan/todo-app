const addButton = document.getElementById("form__button");
const inputValue = document.getElementById("form__input");
const form = document.getElementById("form");

form.addEventListener("click",(event)=>{
    const clickedElement = event.target;

if(event.target.tagName=="INPUT"){
    clickEventListener(clickedElement.id);
}
else if(clickedElement.tagName==="BUTTON"){
    if(clickedElement.id=="form__button"){
        clickEventListener(clickedElement.id);
    }
    else if(clickedElement.classList.contains('completeButton') || clickedElement.classList.contains('deleteButton')){
        clickEventListener(clickedElement.classList.value);
    }
    
}
else if(clickedElement.id=="todosContainer"){
    clickEventListener(clickedElement.id);
}
else if (clickedElement.classList=="todo-p"){
    clickEventListener(clickedElement.innerText);
}
})

function clickEventListener(event) {  
    console.log(event + " Click");
}



const todoDiv = document.getElementById("todosContainer");
const renderTodoItem = (todoText) =>  {
    

    const todoItem = document.createElement("p");
    todoItem.innerText=todoText;
    todoItem.classList.add('todo-p');

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
    

        todoItem.style.opacity="0.5";
        todoItem.style.textDecoration="line-through";
    });

    completeButton.classList.add('completeButton');

    const layoutDiv = document.createElement("div");
    layoutDiv.classList.add('todos__item-layout');


    layoutDiv.appendChild(completeButton);
    layoutDiv.appendChild(deleteButton);
    layoutDiv.appendChild(todoItem);

    todoDiv.prepend(layoutDiv);

    inputValue.value ="";
}

const renderAllTodoItems = () => {
    dizi.forEach(item => {
        renderTodoItem(item);
    });
};

const dizi =[];


addButton.addEventListener("click", () =>{
    if(inputValue.value === ""){
        alert("Input boş bırakılamaz.");
    }
    else{
        renderTodoItem(inputValue.value);

      dizi.push(inputValue.value);
      renderTodoItem(dizi[dizi.length-1]);

    }
});


function firstOpenPageRender (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(
        json =>{
            for (let index = 0; index < json.length; index++) {
                dizi.push(json[index].name);
            }

            renderAllTodoItems(dizi);
        }
    )
}

firstOpenPageRender(); 

inputValue.addEventListener('input',(event) => {
    const searchString = event.target.value.toLowerCase();
    const filteredArray =  dizi.filter( person => {
        return person.includes(searchString); 
    });

    console.log(filteredArray);
});
