const addButton = document.getElementById("form__button");
const inputValue = document.getElementById("form__input");
const form = document.getElementById("form");

form.addEventListener("click",(event)=>{

if(event.target.id=="form__input"){
    clickEventListener(event.target.id);
}
else if(event.target.id=="form__button"){
    clickEventListener(event.target.id);
}
else if(event.target.id=="todosContainer"){
    clickEventListener(event.target.id);
}
else if (event.target.classList=="todos__p"){
    clickEventListener(event.target.innerText);
}
})

function clickEventListener(event) {  
    console.log(event + " Click");
}


const todoDiv = document.getElementById("todosContainer");
const renderTodoItem = (todoText) => {
    
    const todoItem = document.createElement("p");
    todoItem.innerText=todoText;
    todoItem.classList.add('todos__p');



    const layoutDiv = document.createElement("div");
    layoutDiv.classList.add('todos__item-layout');

    layoutDiv.appendChild(todoItem);

    todoDiv.appendChild(layoutDiv);

    inputValue.value ="";
}

const renderAllTodoItems = () => {
    //todoDiv.innerHTML = ""; // mevcut elemanları temizler
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
      const deneme = dizi.push(inputValue.value);
      renderAllTodoItems(deneme);
    }

});


function firstOpenPageRender (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    //.then(json => console.log(json));
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