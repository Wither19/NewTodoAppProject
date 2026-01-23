import "./styles/App.scss"
import todoJSON from "./todo-sample.json"
import { TodoItem } from "./classes/TodoItem"

import TodoListWrapper from "./components/TodoListWrapper"
import ItemAddButton from "./components/ItemAddButton"
import ItemAddModal from "./components/ItemAddModal"

import { useState } from "react"

function App() {
  const [todos, _] = useState(todoJSON.todoList.map(todo => new TodoItem(todo)))
  const [addingItem, setAddingItem] = useState(false)

  const modalShow = () => {
    setAddingItem(true)
  }

  const modalHide = () => {
    setAddingItem(false)
  }

  const modalCallback = (d: string) => {
    alert(d)
  }

  return (
    <>
        <ItemAddButton click={modalShow} adding={addingItem} />
        <ItemAddModal adding={addingItem} passFn={modalCallback} hideFn={modalHide} />
        <TodoListWrapper list={todos} />
    </>
  )
}

export default App
