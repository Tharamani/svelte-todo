import { writable } from 'svelte/store';

// create an default values
let todos = []

todos = JSON.parse(localStorage.getItem('todos')) || todos;

// Create a Writable store that allows both updating and reading by subscription.
let todoStore = writable(todos);

// update localStorage values whenever the store values change
todoStore.subscribe((value) =>
// localStorage only allows strings
localStorage.setItem('todos', JSON.stringify(value))
);
 
// export the store for usage elsewhere
export default todoStore