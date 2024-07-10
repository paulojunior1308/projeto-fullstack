const form = document.getElementById('task-form');
const tasklist = document.getElementById('tasks');

form.onsubmit = function(e) 
{
  e.preventDefault();
  const inputField = document.getElementById('task-input');
  if (inputField.value.trim() !== "") {
    addTask(inputField.value);
    form.reset();
  } else {
    alert("Digite uma tarefa antes de adicionar.");
  }
};

function addTask(description)
{
  const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	tasklist.appendChild(taskContainer);

  newTask.addEventListener('change', function()
  {
    if(newTask.checked)
      {
        taskLabel.style.textDecoration = 'line-through';
      }
      else
      {
        taskLabel.style.textDecoration = 'none';
      }
  });
}