function addPost() {
    const addBtn = document.querySelector('.add');
    
  
    if (!addBtn) {
        console.error("Кнопка 'Добавить' не найдена.");
        return;
    }

    addBtn.onsubmit = () => {
        const titleInput = document.querySelector('#title');
        const descriptionInput = document.querySelector('#description');
        const timeInput = document.querySelector('#time');
        const dateInput = document.querySelector('#date');
        const taskTypeInput = document.querySelector('#taskType');

   
        if (!titleInput || !descriptionInput || !timeInput || !dateInput || !taskTypeInput) {
            console.error("Один или несколько элементов формы не найдены.");
            return;
        }

  
        const post = {
            "title": titleInput.value,
            "description": descriptionInput.value,
            "time": timeInput.value,
            "date": dateInput.value,
            "status": taskTypeInput.value
        };

       
        fetch('http://localhost:3001/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post) 
        })
        .then(response => response.json())
        .then(data => console.log('Успех:', data))
        .catch(error => console.error('Ошибка:', error));

       
        console.log(post);
    };
}

