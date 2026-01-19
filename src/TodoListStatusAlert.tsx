import type { TodoItemStatus } from "./enums"

type TodoListStatusAlertProps = {
  status: TodoItemStatus
}

function TodoListStatusAlert({ status }: TodoListStatusAlertProps) {
  return <div className={`todo-status-alert-text ${status}`}></div>
}

export default TodoListStatusAlert