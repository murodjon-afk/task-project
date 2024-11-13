const modal = document.querySelector('#modalOverlay')
const addTask =document.querySelector('.add-task')
const closeBtn = document.querySelector('.close-btn')

const tableBtn = document.querySelector('.view-table')

const plitBtn = document.querySelector('.view-toggle')

const taskBlock = document.querySelector('.task-block')
const taskList = document.querySelector('.task-list')





 export function showCloseModal(){
    addTask.onclick = ()=>{
        modal.style.display = 'flex';
    }

    closeBtn.onclick = ()=>{
        modal.style.display = 'none';
    }


}

 export function plitBlockTask() {
    plitBtn.onclick = ()=>{
        plitBtn.style.color = '#2196F3'
        tableBtn.style.color = 'grey';
        taskBlock.style.display = 'grid';
        taskList.style.display = 'none'

    }

    tableBtn.onclick = ()=>{
        plitBtn.style.color = 'grey'
        tableBtn.style.color = '#2196F3';
        taskBlock.style.display = 'none';
        taskList.style.display = 'flex'

    }
}



