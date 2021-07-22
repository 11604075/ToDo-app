let todoInput = document.getElementById("todo-input");
let addBtn = document.getElementById("add-btn");
let todoItemList = document.getElementById("todo-item-list");


function addtodoItems(){
    //add value in list
    let todoInputData = todoInput.value;
    let li = document.createElement('li');

    let spanE1 = document.createElement('span');
    li.append(spanE1);
    spanE1.innerHTML=todoInputData;
    

    li.style.cssText = "animation-name:slideIn;";
    todoItemList.appendChild(li);
    todoInput.value="";
    todoInput.focus();
    
    // create delete button
    let trashBtn = document.createElement("i");
    trashBtn.classList.add("fas","fa-trash");
    li.appendChild(trashBtn);

    //create edit button
    let editBtn = document.createElement('i');
    editBtn.classList.add('fas','fa-edit');
    li.appendChild(editBtn);
}

function deletetodoItems(event){
  
   if(event.target.classList[1]==='fa-trash'){
       let item=event.target.parentElement;
       item.classList.add('slideOut');
       
       item.addEventListener('transitionend', function(){
           item.remove();
       });
    }
}

function edittodoList(event){
    
    if(event.target.classList[1]==='fa-edit'){
       let editedValue=prompt("please add new value");
       let item=event.target.parentElement;
       let spanE1=item.querySelector("span");
       spanE1.innerText=editedValue;

    }


} 

addBtn.addEventListener("click",addtodoItems);
todoItemList.addEventListener("click",deletetodoItems);
todoItemList.addEventListener("click",edittodoList);



