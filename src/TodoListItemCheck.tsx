import { CheckSquareFill } from "react-bootstrap-icons"
import type { TodoItem } from "./TodoItem"

type TodoListItemCheckProps = {
  todo: TodoItem
}

function TodoListItemCheck({ todo }: TodoListItemCheckProps) {
 return (
  <div className="todo-list-item-check" onClick={() => { todo.toggleCompletion()}}>
    <CheckSquareFill fill={todo.getCompletion() ? "#228B22" : "#ZA4358"} />
  </div>
 )
}

export default TodoListItemCheck