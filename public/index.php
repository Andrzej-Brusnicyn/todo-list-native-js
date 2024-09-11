<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/tailwindcss@2.2.4/dist/tailwind.min.css" rel="stylesheet">
	<link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="w-full h-screen bg-gray-100 pt-8">    
		<div class="todolist bg-white p-3 max-w-md mx-auto">
            <div class="text-center">
                <h1 class="text-3xl font-bold">ToDo App</h1>
				<div class="flex">
                    <input
                        class="taskInput w-80 border-b-2 border-gray-500 text-black"
                        type="text" placeholder="Enter your task here" 
                    />
                    <button
                        class="addButton ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
                    >   
                        <svg class="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="12" x2="15" y2="12" />  <line x1="12" y1="9" x2="12" y2="15" /></svg>
                        <span>Add</span>
                    </button>
				</div>
            </div>
            <div class="mt-8">
                <ul>
					
                </ul>
				<div class="empty">
    				<p class="text-center">Список дел пуст</p>
				</div>
            </div>
            <div class="mt-8">
                <button 
                    class="removeCompleted border-2 border-red-500 p-2 text-red-500 w-48 hover:text-white hover:bg-red-500"
                >Clear Completed Task</button>
                <button 
                    class="reset border-2 border-indigo-500 p-2 text-indigo-500 ml-4 mb-8 w-48 hover:text-white hover:bg-indigo-500"
                >Reset Todo List</button>
				<button 
                    class="completeAll border-2 border-red-500 p-2 text-red-500 w-48 hover:text-white hover:bg-red-500"
                >Complete All Tasks</button>
                <button 
                    class="uncompleteAll border-2 border-indigo-500 p-2 text-indigo-500 ml-4 mb-8 w-48 hover:text-white hover:bg-indigo-500"
                >Uncomplate All Tasks</button>
            </div>
        </div> 
    </div>
	<script src="index.js"></script>
</body>
</html>