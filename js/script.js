/* eslint-disable linebreak-style */
'use strict';

class Todo {
	constructor(form, input, todoList, todoCompleted) {
		this.form = document.querySelector(form);
		this.input = document.querySelector(input);
		this.todoList = document.querySelector(todoList);
		this.todoCompleted = document.querySelector(todoCompleted);
		this.todoContainer = document.querySelector('.todo-container');
		this.todoRemove = document.querySelector('.todo-remove');
		this.todoComplete = document.querySelector('.todo-complete');
		this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));

	}

	addToStorage() {
		localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
	}

	render() {
		this.todoList.textContent = '';
		this.todoCompleted.textContent = '';
		this.todoData.forEach(this.createItem);
		this.addToStorage(); 
	}

	createItem = (todo) => {
		const li = document.createElement('li');
		li.classList.add('todo-item');
		li.key = todo.key;
		li.insertAdjacentHTML('beforeend', `
		<span class="text-todo">${todo.value}</span>
		<div class="todo-buttons">
			<button class="todo-edit"></button>
			<button class="todo-remove"></button>
			<button class="todo-complete"></button>
		</div>
		`);

		if (todo.completed) {
			this.todoCompleted.append(li);
		} else {
			this.todoList.append(li)
		}

	}

	addTodo(event) {
		event.preventDefault();
		if (this.input.value.trim()) {
			const newTodo = {
				value: this.input.value,
				completed: false,
				key: this.generateKey()
			};

			this.todoData.set(newTodo.key, newTodo);
			this.input.value = '';
			this.render();
		}
	}

	generateKey() {
		return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	}

	deleteItem(target) {
		let parent = target.closest('.todo-item');
		parent.remove();

		this.todoData.forEach((item) => {
			if (item.key === parent.key) {
				this.todoData.delete(item.key);
			};
		})
		this.render();
	}

	completedItem(target) {
		let parent = target.closest('.todo-item');
		let parentObj = this.todoData.get(parent.key);
		if(parentObj.completed) {
			parentObj.completed = false;
		} else {
			parentObj.completed = true;
		}
		
		this.render();
	}

	editItem(target) {
		let input = document.createElement('input');
		input.style.width = '70%';
		input.style.lineHeight = '2';
		input.style.border = '2px solid steelblue';
		let parent = target.closest('.todo-item');
		let textTodo = parent.querySelector('.text-todo');
		textTodo.style.display = 'none';
		parent.prepend(input);
		input.addEventListener('change', () => {
			input.value.trim();
			textTodo.textContent = input.value;
			textTodo.style.display = 'inline';

			this.todoData.forEach((item) => {
				if (item.key === parent.key) {
					item.value = input.value;
				}

				input.remove();

				this.render();
			});
		});
	}

	handler(event) {
		this.todoContainer.addEventListener('click', (event) => {
			const target = event.target;
			if (target.matches('.todo-complete')) {
				this.completedItem(target);
			} else if (target.matches('.todo-remove')) {
				this.deleteItem(target);
			} else if (target.matches('.todo-edit')) {
				this.editItem(target);
			}
		})

	}

	init() {
		this.form.addEventListener('submit', this.addTodo.bind(this));
		this.handler();
		this.render();
	}
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');

todo.init();
