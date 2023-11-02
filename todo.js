const taskInput = document.getElementById('task');
const prioritySelect = document.getElementById('priority');
const taskList = document.getElementById('task-list');

taskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const taskText = taskInput.value;
        const priority = prioritySelect.value;
        if (taskText) {
            addTask(taskText, priority);
        }
    }
});

function addTask(taskText, priority) {
    const li = document.createElement('li');
    const taskElement = document.createElement('span');
    const priorityElement = document.createElement('span');
    const actions = document.createElement('div');
    
    taskElement.textContent = taskText;
    priorityElement.textContent = priority;
    priorityElement.classList.add(`priority-${priority}`);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        li.remove();
    });
    
    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.addEventListener('click', () => {
        li.classList.toggle('task-done');
    });
    
    actions.appendChild(doneButton);
    actions.appendChild(deleteButton);
    
    li.appendChild(taskElement);
    li.appendChild(priorityElement);
    li.appendChild(actions);
    
    taskList.appendChild(li);
    
    taskInput.value = '';
}
