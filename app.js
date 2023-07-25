var Addtask = document.getElementById("Addtodo");
var input = document.getElementById("inputfield");
var ToDoContainer = document.getElementById("todoContainer");
Addtask.addEventListener('click', addItem);
input.addEventListener('keypress', function (e) {
    if (e.key == "Enter") {
        addItem();

    }
})

function addItem(e) {
    const task_value = input.value;
    // console.log(task_value);
    const item = document.createElement('div');
    item.classList.add('item');

    const item_content = document.createElement('div');
    item_content.classList.add('content');
    item.appendChild(item_content);

    const input_item = document.createElement('input');
    input_item.classList.add('text');
    input_item.type = 'text';
    input_item.value = task_value;
    input_item.setAttribute('readonly', 'readonly');
    item_content.appendChild(input_item);
    input_item.addEventListener('dblclick', function () {
        input_item.style.textDecoration = "line-through";
    })

    const item_action = document.createElement('div');
    item_action.classList.add('actions');

    const edit_item = document.createElement('button');
    edit_item.classList.add('edit', 'btn', 'btn-outline-success');
    edit_item.innerText = 'Edit'

    const delete_item = document.createElement('button');
    delete_item.classList.add('delete', 'btn', 'btn-outline-danger');
    delete_item.innerText = 'Delete'

    item_action.appendChild(edit_item);
    item_action.appendChild(delete_item);

    item.appendChild(item_action);

    ToDoContainer.appendChild(item);

    edit_item.addEventListener('click', (e) => {
        if (edit_item.innerText.toLowerCase() == "edit") {
            edit_item.innerText = "Save";
            input_item.removeAttribute("readonly");
            input_item.focus();
        } else {
            edit_item.innerText = "Edit";
            input_item.setAttribute("readonly", "readonly");
        }

    })
    delete_item.addEventListener('click', (e) => {
        ToDoContainer.removeChild(item);
    })
    input.value = " ";
}