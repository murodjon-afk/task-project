export function createTaskPLit(item) {
    const taskList = document.querySelector('.task-block');
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

    taskTitle.classList.add('plit-task-title');
    taskDesc.classList.add('plit-task-desc');
    taskDate.classList.add('plit-task-date');
    taskTime.classList.add('plit-task-time');
    taskStatus.classList.add('plit-task-status');
  
    if (taskStatus.textContent.trim() === 'Готово') {
      taskStatus.classList.add('plit-completed');
    }
  
    if (taskStatus.textContent === 'Не готово') {
      taskStatus.classList.add('plit-not-completed');
    }
  
    if (taskStatus.textContent === 'В прогрессе') {
      taskStatus.classList.add('plit-in-progress');
    }
  

    taskItem.classList.add('plit-task-item');
    taskItem.append(taskTitle, taskDesc, taskDate, taskTime, taskStatus);
    taskList.append(taskItem);
  
    return taskList;
  }
  


