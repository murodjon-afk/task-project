import { createTaskItem } from "./component/table.js";
import { showCloseModal } from "./component/modal.js";
import { createTaskPLit } from "./component/plit.js";
import { plitBlockTask } from "./component/modal.js";


  

  fetch("http://localhost:3001/tasks")
    .then((response) => response.json())
    .then((data) => {
     
      data.forEach(item => {
        createTaskItem(item);
       
      });
    })
    .catch((error) => console.error('Ошибка при загрузке данных:', error));
    fetch("http://localhost:3001/tasks")
    .then((response) => response.json())
    .then((data) => {
     
      data.forEach(item => {
        createTaskPLit(item)
       
      });
    })
    .catch((error) => console.error('Ошибка при загрузке данных:', error));

    showCloseModal();
    plitBlockTask();

  

  
 
  