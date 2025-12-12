import "./App.scss"
import todoJSON from "./todo-sample.json"
import { TodoItem } from "./TodoItem.ts"

// import type { Todo } from "./types.ts"

import { useState } from "react"

function App() {
  const [todos, setTodos] = useState<TodoItem[]>(todoJSON.todoList.map((todo) => new TodoItem(todo)))
  return (
    <>
        {todos.map((todo) => <h3>{todo.getName()}</h3>)}
    </>
  )
}

export default App
