<script>
	import AddTodoForm from "./AddTodoForm.svelte";
	import TodoList from "./TodoList.svelte";
</script>

<main class="container">
	<AddTodoForm />
	<TodoList />
</main>

<style>
	main {
			text-align: center;
			padding: 1em;
			max-width: 240px;
			margin: 0 auto;
		}

	main{
			max-width: none;
		}
</style>