import { writable, Writable } from "svelte/store";

export const persistStore = (key, intial) => {
    const persis = localStorage.getItem(key)
    const data = persis ? JSON.parse(persis) : intial
    const store = writable(data, () => {
        const unsubscribe = store.subscribe(value => {
            localStorage.setItem(key, JSON.stringify(value))
        })
        return unsubscribe
    })
    return store
}