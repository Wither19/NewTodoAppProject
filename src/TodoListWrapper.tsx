import { TodoItem } from "./TodoItem"
import TodoListItem from "./TodoListItem"

type TodoListWrapperProps = { list: TodoItem[] }

function TodoListWrapper({ list }: TodoListWrapperProps) {
  return list.map((todo) => <TodoListItem todo={todo} />)
}

export default TodoListWrapper