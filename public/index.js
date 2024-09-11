class Task {
    constructor(text) {
        this.text = text;
        this.element = this.createTaskElement();
    }

    createTaskElement() {
        const li = document.createElement('li');
        li.className = 'p-2 rounded-lg';

        const mainDiv = document.createElement('div');
        mainDiv.className = 'flex align-middle flex-row justify-between';

        const checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'p-2';

        const checkbox = document.createElement('input');
        checkbox.className = 'h-6 w-6';
        checkbox.type = 'checkbox';

        const textDiv = document.createElement('div');
        textDiv.className = 'p-2';

        const textParagraph = document.createElement('p');
        textParagraph.classList.className = 'text-lg text-black';
        textParagraph.textContent = this.text;

        const button = document.createElement('button');
        button.className = 'deleteButton ml-2 border-2 border-red-500 p-2 text-red-500 hover:text-white hover:bg-red-500 rounded-lg flex';
        button.innerHTML = `
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            <span>Remove</span>
        `;
        const hr = document.createElement('hr');
        hr.className = 'mt-2';

        li.appendChild(mainDiv);
        mainDiv.appendChild(checkboxDiv);
        mainDiv.appendChild(textDiv);
        mainDiv.appendChild(button);
        checkboxDiv.appendChild(checkbox);
        textDiv.appendChild(textParagraph);
        li.appendChild(hr);

        checkbox.addEventListener('change', () => {
            this.doneTask(checkbox.checked);
        });
        button.addEventListener('click', () => this.delete());

        return li;
    }

    doneTask(isComplete) {
        this.completed = isComplete;
        const taskText = this.element.querySelector('p');
        taskText.classList.toggle('completed', isComplete);
        this.element.querySelector('input[type="checkbox"]').checked = isComplete;
    }

    delete() {
		ToDoList.tasks = ToDoList.tasks.filter((e) => e !== this);
		this.todoList.renderTasks();
    }
}

class ToDoList {
    static tasks = [];

    constructor(parentNode) {
        this.parentNode = parentNode;
        this.inputTask = this.parentNode.querySelector(".taskInput");
        this.addButton = this.parentNode.querySelector(".addButton");
        this.resetButton = this.parentNode.querySelector(".reset");
        this.completeAllButton = this.parentNode.querySelector(".completeAll");
        this.uncompleteAllButton = this.parentNode.querySelector(".uncompleteAll");
        this.removeCompletedButton = this.parentNode.querySelector(
            ".removeCompleted"
        );
        this.ulElement = this.parentNode.querySelector("ul");
        this.emptyMessage = this.ulElement.nextElementSibling;

        this.allEventListeners();
        this.renderTasks();
    }

    allEventListeners() {
        this.addButton.addEventListener('click', () => this.addTask());
        this.resetButton.addEventListener('click', () => this.resetTasks());
        this.completeAllButton.addEventListener('click', () => this.setAllTasksStatus(true));
        this.uncompleteAllButton.addEventListener('click', () => this.setAllTasksStatus(false));
        this.removeCompletedButton.addEventListener('click', () => this.removeCompletedTasks());
    }

    addTask() {
        const taskText = this.inputTask.value;
        if (taskText === '') {
            alert('Введите текст задачи!');
        }

        const newTask = new Task(taskText);
        newTask.todoList = this;
        ToDoList.tasks.push(newTask);
        this.ulElement.appendChild(newTask.element);
        this.clearInput();
        this.renderTasks();
    }

    clearInput() {
        this.inputTask.value = "";
        this.inputTask.focus();
    }

    renderTasks() {
        this.ulElement.innerHTML = '';

        ToDoList.tasks.forEach(task => {
            this.ulElement.appendChild(task.element);
        });

        if (ToDoList.tasks.length === 0) {
            this.emptyMessage.classList.remove('none');
        } else {
            this.emptyMessage.classList.add('none');
        }
    }

    resetTasks() {
        ToDoList.tasks = [];
        this.renderTasks();
    }

    setAllTasksStatus(isComplete) {
        ToDoList.tasks.forEach(task => {
            task.doneTask(isComplete);
        });
    }

    removeCompletedTasks() {
		for (let task of ToDoList.tasks) {
			if(task.completed) {
				task.delete();
			}
		}
    }
}

document.querySelectorAll('.todolist').forEach(element => new ToDoList(element));
