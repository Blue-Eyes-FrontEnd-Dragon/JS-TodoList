// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter-tasks');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTasks);
    // Filter task event
    filter.addEventListener('keyup', filterTasks);
}

function addTask(e) {

    if (taskInput.value === '') {
        alert('Add a task');
    }

    const li = document.createElement('li');
    li.className = 'collection-item';

    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';

    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    taskList.appendChild(li);

    // clear input
    taskInput.value = '';

    e.preventDefault();
}

function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item')) {
        // We are clicking the icon, the parent of that is the <a> and the parent 
        // of that is the <li> which we want to remove
        if (confirm('Are You Sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

function clearTasks(e) {
    // Simple method
    // taskList.innerHTML = '';

    // Faster method (400 times faster!)
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        (task) => {
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none'
            }
        }
    );
}