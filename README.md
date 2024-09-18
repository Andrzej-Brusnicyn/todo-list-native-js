# ToDo List Application

This is a simple ToDo list built using native JavaScript, following best practices and OOP. The main feature of this project is the ability to create and manage multiple independent task lists on a single page.

## Project Structure

### `Task` Class
Each task is an instance of the `Task` class. It contains methods for:
- Creating the task element in the DOM.
- Handling task completion and deletion.

### `ToDoList` Class
Manages the entire task list, including:
- Adding new tasks.
- Resetting the list.
- Marking all tasks as complete or incomplete.
- Removing completed tasks.

### `document.querySelectorAll('.todolist').forEach(element => new ToDoList(element));`
This line allows the app to create and manage **multiple independent ToDo lists** on the same page.

- The code uses `document.querySelectorAll()` to find all elements with the `.todolist` class (representing different task lists).
- Then, it iterates over each of these elements and creates a new instance of the `ToDoList` class for each one.
- This approach ensures that you can have multiple ToDo lists on the same page, each managed independently with its own tasks, buttons, and interactions.

For example, if you have two `div` elements with the `todolist` class, the app will initialize a separate ToDo list for each, allowing you to manage them without any interference.
