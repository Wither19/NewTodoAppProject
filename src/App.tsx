import "./styles/App.scss"
import todoJSON from "./todo-sample.json"
import { TodoItem } from "./classes/TodoItem"

import TodoListWrapper from "./components/TodoListWrapper"
import ItemAddButton from "./components/ItemAddButton"
import ItemAddModal from "./components/ItemAddModal"

import { useState } from "react"
import type { Moment } from "moment"
import moment from "moment"

function App() {
  const [todos, _] = useState(todoJSON.todoList.map(todo => new TodoItem(todo)))
  const [addingItem, setAddingItem] = useState(false)
  const [newTodoDate, setNewTodoDate] = useState<Moment | undefined>(undefined)

  const showModal = () => {
    setAddingItem(true)
  }

  const hideModal = () => {
    setAddingItem(false)
  }

  const modalCallback = (d: string) => {
    setNewTodoDate(moment(d))

    alert(newTodoDate?.day)
    hideModal()
  }

  return (
    <>
        <ItemAddButton click={showModal} adding={addingItem} />
        <ItemAddModal adding={addingItem} passFn={modalCallback} hideFn={hideModal} />
        <TodoListWrapper list={todos} />
    </>
  )
}

export default App
