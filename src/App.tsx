import "./styles/App.scss"
import todoJSON from "./todo-sample.json"
import { TodoItem } from "./classes/TodoItem.ts"

import TodoListWrapper from "./components/TodoListWrapper.tsx"

import { useState } from "react"

function App() {
  const [todos, setTodos] = useState(todoJSON.todoList.map(todo => new TodoItem(todo)))

  const addButtonClickHandle = () => {
    
  }

  return (
    <>
        <ItemAddButton click={addButtonClickHandle} />
        <ItemAddModal />
        <TodoListWrapper list={todos} />
    </>
  )
}

export default App
