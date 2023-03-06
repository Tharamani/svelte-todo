<script>
    import TodoStore from './stores/TodoStore.js';
	let title = '';
    let notes = '';
    let dueDate = '';
    let priority = '';
    let isChecked = false;

    // addtodo
    const handleSubmit = () => {
        console.log("handleSubmit")
         const todo = {id: Math.random(), title, notes, due_date: dueDate, priority, is_checked: isChecked }
        if(title){
            TodoStore.update(currentTodos => {
            return [...currentTodos, todo]
        })
        document.querySelector('#title').value = ''
        }
    }
    
</script>

<form class ='todo-form' on:submit|preventDefault={handleSubmit}>
    <input type="text" id='title' placeholder="add title" bind:value={title}>
    <button>Add</button>
</form>
