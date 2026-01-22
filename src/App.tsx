import "./styles/App.scss"
import todoJSON from "./todo-sample.json"
import { TodoItem } from "./classes/TodoItem"

import TodoListWrapper from "./components/TodoListWrapper"
import ItemAddButton from "./components/ItemAddButton"
import ItemAddModal from "./components/ItemAddModal"

import { useState } from "react"

function App() {
  const [todos, _] = useState(todoJSON.todoList.map(todo => new TodoItem(todo)))

  const modalCallback = (d: string) => {
    alert(d)
  }

  return (
    <>
        <ItemAddButton />
        <ItemAddModal passFn={modalCallback} />
        <TodoListWrapper list={todos} />
    </>
  )
}

export default App
