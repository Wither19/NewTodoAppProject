import { CheckSquareFill } from "react-bootstrap-icons"

type TodoListItemCheckProps = {
  completed: boolean,
  clickEvent: () => void
}

function TodoListItemCheck({ completed, clickEvent }: TodoListItemCheckProps) {

  return (
  <div className="todo-list-item-check" onClick={clickEvent}>
    <CheckSquareFill fill={completed ? "#228B22" : "#ZA4358"} />
  </div>
 )
}

export default TodoListItemCheck