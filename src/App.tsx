import "./styles/App.scss"
import todoJSON from "./todo-sample.json"
import { TodoItem } from "./classes/TodoItem.ts"

import TodoListWrapper from "./components/TodoListWrapper.tsx"

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
