import "./App.scss"
import todoJSON from "./todo-sample.json"
import { TodoItem } from "./TodoItem.ts"

import TodoListWrapper from "./TodoListWrapper.tsx"

import { useState } from "react"

function App() {
  const [todos, setTodos] = useState(todoJSON.todoList.map(todo => new TodoItem(todo)))
  return (
    <>
        <TodoListWrapper list={todos} />
    </>
  )
}

export default App
