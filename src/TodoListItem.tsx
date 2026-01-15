import { TodoItem } from "./TodoItem"
import { Card, CardBody, CardTitle, CardText } from "react-bootstrap"
import TodoListItemCheck from "./TodoListItemCheck"

type TodoListItemProps = {
  todo: TodoItem
}

function TodoListItem({ todo }: TodoListItemProps) {

  return (
    <Card className={`todo-list-item ${todo.getStatus() }`} key={todo.getName()}>
      <CardBody>
        <div>
          <TodoListItemCheck todo={todo} />
        </div>
        <div>
          <CardTitle>{todo.getName()}</CardTitle>
          <CardText>{todo.getFullDate()} - {todo.getDayOfWeek()}</CardText>
        </div>
      </CardBody>
    </Card>
  )
}

export default TodoListItem