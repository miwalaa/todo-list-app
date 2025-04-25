import { useState, useReducer } from 'react'
import Todo from "./components/Todo"
import { ACTIONS } from "./constants/actions"
import styles from "./App.module.css"

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  }
}

function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (name.trim() === "") return
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } })
    setName("")
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Todo List</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={name}
          onChange={e => setName(e.target.value)}
          className={styles.input}
        />
      </form>
      <div className={styles.list}>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </div>
    </div>
  )
}

export default App
