import { TodoItem } from "./TodoItem"
import { Card, CardBody, CardTitle, CardText } from "react-bootstrap"
import TodoListItemCheck from "./TodoListItemCheck"
import { useState } from "react"
import TodoListStatusAlert from "./TodoListStatusAlert"

type TodoListItemProps = {
  todo: TodoItem
}

function TodoListItem({ todo }: TodoListItemProps) {

  const [itemCompletion, setItemCompletion] = useState(todo.getCompletion())
  const [itemStatus, setItemStatus] = useState(todo.getStatus())
  
    const checkChangeHandle = () => {
      todo.toggleCompletion()
 
      setItemCompletion(todo.getCompletion())
      setItemStatus(todo.getStatus())
    };

  return (
    <Card className={`todo-list-item ${todo.getStatus() }`} key={todo.getName()}>
      <CardBody>
        <div>
          <TodoListItemCheck completed={itemCompletion} clickEvent={checkChangeHandle} />
          <TodoListStatusAlert status={itemStatus} />
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