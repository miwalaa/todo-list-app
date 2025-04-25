import React from 'react'
import { ACTIONS } from '../constants/actions.js'
import styles from './Todo.module.css'

export default function Todo({ todo, dispatch }) {
  return (
    <div className={styles.todo}>
      <span
        className={`${styles.name} ${todo.complete ? styles.complete : ''}`}
      >
        {todo.name}
      </span>
      <div className={styles.buttons}>
        <button
          className={styles.toggle}
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        >
          Complete
        </button>
        <button
          className={styles.delete}
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          Delete
        </button>
      </div>
    </div>
  )
}
