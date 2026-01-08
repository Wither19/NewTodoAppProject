import { TodoItem } from "./TodoItem"
import { Card, CardBody, CardTitle, CardText } from "react-bootstrap"
import TodoListItemCheck from "./TodoListItemCheck"

type TodoListItemProps = {
  todo: TodoItem
}

function TodoListItem({ todo }: TodoListItemProps) {
  const name = todo.getName()
  const fullDate = todo.getFullDate()
  const status = todo.getStatus()
  const completed = todo.getCompletion()

  const checkChangeHandle = () => {
    todo.toggleCompletion()
  }

  return (
    <Card className={`todo-list-item ${status}`} key={name}>
      <CardBody>
        <div>
          <TodoListItemCheck checked={checkChangeHandle} completed={completed} />
        </div>
        <div>
          <CardTitle>{name}</CardTitle>
          <CardText>{fullDate}</CardText>
        </div>
      </CardBody>
    </Card>
  )
}

export default TodoListItem