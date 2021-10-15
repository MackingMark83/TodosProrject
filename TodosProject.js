document.addEventListener("DOMContentLoaded", function(event) { 
    event.preventDefault();
    let todoForm = document.getElementById("newTodoForm");
   const input = document.querySelector('#rooms');
   const ul = document.querySelector('ul');
   
   const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
   for (let i = 0; i < savedTodos.length; i++) {
    let newRoom = document.createElement("li");
    //const removeBtn = document.createElement('button');
     //removeBtn.innerText = 'newRoom';
     //newRoom.innerText = input.value;
     //newRoom.appendChild(removeBtn);
    //input.value = '';
     localStorage.removeItem("todos", JSON.stringify(savedTodos));
    //ul.append(newRoom);
     newRoom.innerText = savedTodos[i].task;
    newRoom.isCompleted = savedTodos[i].isCompleted ? true : false;
     //ul.appendChild(newRoom);
  }
   
  
   
   ul.addEventListener('click', function(e){
     if (e.target.tagName === 'BUTTON') {
       e.target.parentElement.remove();
     }
     else if (e.target.tagName === 'LI') {
       e.target.classList.toggle('cleanest-room');
     }
   });
   
   
  
   todoForm.addEventListener("submit", function(event) {
     event.preventDefault();
     console.log(input.value);
     const newRoom = document.createElement('li');
     const removeBtn = document.createElement('button');
     removeBtn.innerText = 'newRoom';
      newRoom.innerText = input.value;
      newRoom.appendChild(removeBtn);
     input.value = '';
     ul.append(newRoom);
     const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
     savedTodos.push({ task: newRoom.innerText, isCompleted: false })
     localStorage.setItem("todos", JSON.stringify(savedTodos));
  
   });
  }); 
  