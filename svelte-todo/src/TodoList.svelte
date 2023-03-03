<script>
import ListItem from './ListItem.svelte'
import TodoStore from './stores/TodoStore.js';

export let todos = [];
console.log('list ', todos)

TodoStore.subscribe(data => {
		console.log('store app data' , data)
		todos = data
	})

</script>

<div id="list">
        {#each todos as todo (todo.id)}
        <ListItem {todo} />
        {/each}
</div>