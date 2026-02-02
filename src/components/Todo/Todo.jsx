import { useState } from 'react'

export default function Todo() {

  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handelSubmit = (e) => {
    e.preventDefault()

    if (newTodo) {
      setTodos([...todos, { text: newTodo, completed: false }])
      setNewTodo('')
    }
  }

  const handelDelete = (i) => {
    setTodos(todos.filter((_, index) => index !== i))
  }

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder='Add todo'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)} />
        <button type='submit'>Add Todo</button>

        <ul>
          {
            todos.map((todo, i) => (
              <li key={i}>{todo.text} <button onClick={() => handelDelete(i)}>Del</button> </li>
            )
            )
          }
        </ul>
      </form>
    </div>
  )
}
