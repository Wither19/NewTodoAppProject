import { useState } from "react"

import { CheckSquareFill } from "react-bootstrap-icons"
import type { TodoItem } from "./TodoItem"

type TodoListItemCheckProps = {
  todo: TodoItem
}

function TodoListItemCheck({ todo }: TodoListItemCheckProps) {

  const [itemCompletion, setItemCompletion] = useState(todo.getCompletion())

  const checkChangeHandle = () => {
    todo.toggleCompletion()
    setItemCompletion(todo.getCompletion())
  };

  return (
  <div className="todo-list-item-check" onClick={checkChangeHandle}>
    <CheckSquareFill fill={itemCompletion ? "#228B22" : "#ZA4358"} />
  </div>
 )
}

export default TodoListItemCheck