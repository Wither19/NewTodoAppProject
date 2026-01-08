import type { JSX } from "react"
import { CheckSquare, CheckSquareFill } from "react-bootstrap-icons"

type TodoListItemCheckProps = {
  completed: boolean
  checked: () => void
}

const TodoListItemCheck = ({ completed, checked }: TodoListItemCheckProps): JSX.Element => <div className="todo-list-item-check" onClick={checked}>{completed ? <CheckSquare /> : <CheckSquareFill fill={"#228B22"} />}</div>

export default TodoListItemCheck