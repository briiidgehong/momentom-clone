const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function filterFn(toDo){
    return toDo.id === 1
}
let toDos = [];



function deleteToDo(event){
    console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    //localStorage.removeItem()
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !==parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();

}
function saveToDos(num){
    // JSON.stringify : JS object -> string
    // JSON : JavaScript Object Notation
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
};

    function paintToDo(text){
        //create something element !
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        delBtn.innerText="X";
        delBtn.addEventListener("click", deleteToDo);
        //delBtn.value="X";
        const span = document.createElement("span");
        const newId = toDos.length + 1
        li.id = newId;
        span.innerText = text;
        li.appendChild(delBtn);
        li.appendChild(span);
        toDoList.appendChild(li);
        const toDoObj = {
            text: text,
            id: newId
        };
        toDos.push(toDoObj);
        saveToDos();

    }

    function handleSubmit(event){
        event.preventDefault();
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value = "";
    }

    function loadToDos(){
        const loadedToDos = localStorage.getItem(TODOS_LS);
        if(loadedToDos !== null){
            const parsedToDos = JSON.parse(loadedToDos);
            //foreach : array 를 위한 function
            parsedToDos.forEach(function(toDo){
                paintToDo(toDo.text);
            });   
        }
    }

    function init(){
        loadToDos();
        toDoForm.addEventListener("submit", handleSubmit);
    }

    init();