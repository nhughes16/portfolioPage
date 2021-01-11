const taskList = document.getElementById('tasklist');
const taskItems = taskList.querySelectorAll('li');

const page = document.body.querySelector('h1');

page.addEventListener('click', newItem, true);

for(items in taskItems){
    taskItems[items].addEventListener('click', editItem);
    taskItems[items].lastElementChild.addEventListener('blur', updateItem);
    taskItems[items].lastElementChild.addEventListener('keydown', keyOut);
}

function newItem(){
    let newItem = document.createElement('li');
    newItem.addEventListener('click', editItem);
    let contents = document.createElement('span');
    contents.innerHTML= 'New Task';
    let input = document.createElement('input');
    input.value = 'New Task';
    input.addEventListener('blur', updateItem);
    input.addEventListener('keydown', keyOut);
    taskList.appendChild(newItem).appendChild(contents);
    taskList.lastElementChild.appendChild(input);
    taskList.lastElementChild.click();
}

function editItem(){
    this.className = 'edit';
    let input = this.lastElementChild;
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

function updateItem(){
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}

function keyOut(){
    if(event.which === 13){
        updateItem.call(this);
    } else if(event.which === 9){
        event.preventDefault();
        updateItem.call(this);
        newItem();
    }
}
