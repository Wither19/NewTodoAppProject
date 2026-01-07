import { TodoItem } from "./TodoItem"
import TodoListItem from "./TodoListItem"

type TodoListWrapperProps = { list: TodoItem[] }

function TodoListWrapper({ list }: TodoListWrapperProps) {
  return list.map(todo => (
  <div className="todo-list-wrapper">
      <TodoListItem todo={todo} />
  </div>
  ))
}

export default TodoListWrapper