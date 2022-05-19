const addMesage = document.querySelector('.message'),
      addButton = document.querySelector('.add'),
      todo = document.querySelector('.todo');

let todoList = [];

addButton.addEventListener('click', () => {

    let newTodo = {
        todo: addMesage.value,
        checked: false,
        important: false
    }
    todoList.push(newTodo);
    console.log(todoList);
    displayMessages();
});

function displayMessages() {
    todoList.forEach(function(item, i) {
        console.log(item);
    })
}