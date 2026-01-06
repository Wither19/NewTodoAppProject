import { TodoItem } from "./TodoItem"

type TodoListItemProps = {
  todo: TodoItem
}

function TodoListItem({ todo }: TodoListItemProps) {
  return (
    <div>
      <h3 key={todo.getName()}>
        {todo.getName()}
      </h3>
      <sub>
        {todo.getFullDate()}
      </sub>
    </div>
  )
}

export default TodoListItem