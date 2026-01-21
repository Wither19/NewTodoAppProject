import type { TodoItemStatus } from "../enums"

type TodoListStatusAlertProps = {
  status: TodoItemStatus
}

function TodoListStatusAlert({ status }: TodoListStatusAlertProps) {
  return <div className={`todo-status-alert-text ${status}`}>{status}</div>
}

export default TodoListStatusAlert