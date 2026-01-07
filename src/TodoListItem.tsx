import { TodoItem } from "./TodoItem"
import { Card, CardBody, CardTitle, CardText } from "react-bootstrap"

type TodoListItemProps = {
  todo: TodoItem
}

function TodoListItem({ todo }: TodoListItemProps) {
  const name = todo.getName();
  const fullDate = todo.getFullDate();
  const status = todo.getStatus();

  return (
    <Card className={`todo-list-item ${status}`} key={name}>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{fullDate}</CardText>
      </CardBody>
    </Card>
  )
}

export default TodoListItem