const taskInput = document.getElementById('taskInput')
const addTaskButton = document.getElementById('addTaskButton')
const taskList = document.getElementById('taskList')

function addLi() {
	if (taskInput.value.trim() !== '') {
		const newEl = document.createElement('li')
		newEl.className = 'bg-gray-700 px-4 py-2 rounded-lg flex justify-between items-center'
		taskList.append(newEl)

		newEl.innerHTML = `
          <span>${taskInput.value}</span>
          <div>
            <button class="completeTask text-green-500 hover:text-green-400">✔️</button><button class="deleteTask text-red-500 hover:text-red-400">❌</button>
          </div>
        `




		taskInput.value = ''



		newEl.querySelector('.deleteTask').addEventListener('click', () => {
			newEl.remove()
		})

		let isCompleted = false
		newEl.querySelector('.completeTask').addEventListener('click', () => {

			if (!isCompleted) {
				newEl.classList.add('line-through')
				isCompleted = true
			} else {
				newEl.classList.remove('line-through')
				isCompleted = false
			}
		})
	}
}


addTaskButton.addEventListener('click', addLi)
