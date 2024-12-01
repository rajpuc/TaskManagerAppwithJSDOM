//Selecting elements
const input = document.getElementById('input');
const submitBtn = document.getElementById('submitBtn');
const taskList = document.getElementById("taskList");

//Initialize an array to store task
let task = [];
let editIndex = null;

function handleEdit(index){
    // console.log(index);
    input.value=task[index];
    editIndex = index;
    submitBtn.textContent="Update Task";
}
function handleDelete(index){
    // console.log(index);
    let confirmation = confirm("Do you really want to delete the task?");
    if(confirmation){
        task.splice(index,1);
        renderTasks();
    }
}

function renderTasks(){
    // taskList.textContent=""
    // taskList.innerText=""
    taskList.innerHTML=""
    task.forEach((item,index)=>{
  
      const divItem = document.createElement('div');
      const spanItem= document.createElement('span');
      const btnContainer= document.createElement('div');
      const editbtn= document.createElement('button');
      const deletebtn= document.createElement('button');

      divItem.className='d-flex justify-content-between align-items-center mt-3 border p-2 rounded';

      spanItem.textContent=item;

      editbtn.className='btn btn-warning btn-sm me-2';
      editbtn.textContent="Edit";
      editbtn.onclick=()=> handleEdit(index);

      deletebtn.className='btn btn-danger btn-sm me-2';
      deletebtn.textContent="Delete";
      deletebtn.onclick=()=> handleDelete(index);

      btnContainer.appendChild(editbtn);
      btnContainer.appendChild(deletebtn);
      divItem.appendChild(spanItem);
      divItem.appendChild(btnContainer);
      taskList.appendChild(divItem);

    });
}
function handleAdd(){
    const taskValue = input.value.trim();
    // console.log('TaskValue: ',taskValue );

    if(!taskValue){
        alert("Please Enter a task First.");
        return;
    }
    if(editIndex !== null){
        task[editIndex]=input.value;
        editIndex = null;
        submitBtn.textContent="Add Task";
    }else{
        task.push(taskValue);
    }

    // console.log("Task Container: ", task);
    input.value = "";
    renderTasks();
}



//Event Listener for adding task.
submitBtn.addEventListener('click',handleAdd);