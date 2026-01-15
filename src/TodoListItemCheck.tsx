import { CheckSquareFill } from "react-bootstrap-icons"

type TodoListItemCheckProps = {
  completed: boolean
  checked: () => void
}

function TodoListItemCheck({ completed, checked }: TodoListItemCheckProps) {
 return (
  <div className="todo-list-item-check" onClick={checked}>
    <CheckSquareFill fill={completed ? "green" : "#228B22"} />
  </div>
 )
}

export default TodoListItemCheck