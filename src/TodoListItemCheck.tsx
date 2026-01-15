import { CheckSquare, CheckSquareFill } from "react-bootstrap-icons"

type TodoListItemCheckProps = {
  completed: boolean
  checked: () => void
}

function TodoListItemCheck({ completed, checked }: TodoListItemCheckProps) {
  <div className="todo-list-item-check" onClick={checked}>
    {completed ? <CheckSquare /> : <CheckSquareFill fill={"#228B22"} />}
  </div>
}

export default TodoListItemCheck