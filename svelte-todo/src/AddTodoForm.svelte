<script>
    import TodoStore from './stores/TodoStore.js';

	let title = '';
    let notes = '';
    let dueDate = '';
    let priority = '';
    let isChecked = false;

    const handleSubmit = () => {
        console.log("handleSubmit", title)
        const todo = {id: Math.random(), title, notes, due_date: dueDate, priority, is_checked: isChecked }
        TodoStore.update(currentTodos => {
            return [...currentTodos, todo]
        })
    }
    
</script>

    <form on:submit|preventDefault={handleSubmit}>
        <input type="text" placeholder="add title" bind:value={title} >
        <button>Add</button>
    </form>

<style>
</style>