<script>
import ListItem from './ListItem.svelte'
import TodoStore from './stores/TodoStore.js';

let todos = [];

// store is an object with a subscribe method that allows interested parties to be notified whenever the store value changes.
TodoStore.subscribe(data => {
		console.log('store app data' , data)
		todos = data
	})
        console.log('todos list script', todos)
</script>

<div class="todo-list">
        {#each todos as todo (todo.id)}
        <!-- {console.log(' html todos list', todo)} -->
        <ListItem {todo} />
        {/each}
</div>