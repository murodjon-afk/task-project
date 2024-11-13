export function createTaskItem(item) {
  const taskList = document.querySelector('.task-list');
  const taskItem = document.createElement('div');
  const taskTitle = document.createElement('div');
  const taskDate = document.createElement('div');
  const taskTime = document.createElement('div');
  const taskStatus = document.createElement('div');
  const taskDesc = document.createElement('div');


  taskTitle.textContent = item.title; 
  taskDesc.textContent = item.description;
  taskDate.textContent = item.date; 
  taskTime.textContent = item.time; 
  taskStatus.textContent = item.status; 

  taskTitle.classList.add('task-title');
  taskDesc.classList.add('task-desc');
  taskDate.classList.add('task-date');
  taskTime.classList.add('task-time');
  taskStatus.classList.add('task-status');

  if (taskStatus.textContent.trim() === 'Готово') { 
    taskStatus.classList.add('completed');
  
  }

  if (taskStatus.textContent === 'Не готово') { 
      taskStatus.classList.add('not-completed');
      
    }

    if (taskStatus.textContent === 'В прогрессе') { 
      taskStatus.classList.add('in-progress');
      
    }


  taskItem.classList.add('task-item');
  taskItem.append(taskTitle, taskDesc, taskDate, taskTime, taskStatus);


  taskList.append(taskItem);

  return taskList;
}