import "./App.scss"
import todoList from "./todo-sample.json"

import type { Todo } from "./types.ts"

import { useState } from "react"

function App() {
  const [todos, setTodos] = useState<Todo[]>(todoList)
  return (
    <>
     <h1>Hello world!</h1>
    </>
  )
}

export default App
