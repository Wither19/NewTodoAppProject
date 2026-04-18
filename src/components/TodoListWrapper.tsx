import { TodoItem } from "../classes/TodoItem"
import TodoListItem from "./TodoListItem"

type TodoListWrapperProps = { list: TodoItem[] }

function TodoListWrapper({ list }: TodoListWrapperProps) {
  return ( 
    <div className="todo-list-wrapper">
      {list.map(todo => (
        <TodoListItem key={`todo-item-${todo.getName()}`} todo={todo} />
      ))}
    </div>
  )
}

export default TodoListWrapper