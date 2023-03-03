<script>
    import TodoStore from './stores/TodoStore.js';
    export let todo;
    
    const toggleCheckbox = (todo) => {
        TodoStore.update(currentTodos => {
            const copiedTodos = [...currentTodos]
            const updatedTodo = copiedTodos.find((item) => item.id === todo.id)
            console.log('ischecked updatedTodo',  updatedTodo.is_checked )
            updatedTodo.is_checked = !todo.is_checked
            return copiedTodos
        })
    }

const handleTitle = (todo) => {
    
    TodoStore.update(currentTodos => {
            const copiedTodos = [...currentTodos]
            const updatedTodo = copiedTodos.find((item) => item.id === todo.id)
            console.log('ischecked updatedTodo',  updatedTodo.title )
            updatedTodo.title = todo.title
            return copiedTodos
        })
}

const handleClick = (todo) => {
    
}

const handleDate = (todo) => {

    TodoStore.update(currentTodos => {
            const copiedTodos = [...currentTodos]
            const updatedTodo = copiedTodos.filter(item=>item.id === todo.id)
            console.log('due_date updatedTodo',  updatedTodo )
            updatedTodo.due_date = todo.due_date
            return updatedTodo
        })
}

const handleDelete = (todo) => {

    TodoStore.update(currentTodos => {
            const copiedTodos = [...currentTodos]
            const updateTodo = copiedTodos.filter(item=>item.id !== todo.id)
            console.log('ischecked updatedTodo',  updateTodo )
            return updateTodo
        })
}

</script>
    
    <div class="list-item">
        <div>
            <input type="checkbox" bind:checked={todo.is_checked} on:click={() => toggleCheckbox(todo)}>
            <input type="text" bind:value={todo.title} on:input={() => handleTitle(todo)}>
        </div>
        
        <div class="edit-item">
            <textarea type="text" placeholder="Notes"></textarea>
            <label>Priority
            <select >
                <option value="high">High</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
            </select>
        </label>
        <label>Due Date
           <input type="datetime-local" bind:value={todo.due_date} on:change={() => handleDate(todo
        )}/>
        </label>
        <button on:click={() => handleDelete(todo)}>Delete</button>
        </div>
    </div>