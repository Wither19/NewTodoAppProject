import moment, { type Moment } from "moment"
import { useState, type ChangeEvent } from "react"
import { Modal, ModalDialog, ModalHeader, ModalBody, ModalTitle, Button, ModalFooter } from "react-bootstrap"

type ItemAddModalProps = {
  adding: boolean,
  passFn: (d: string) => void,
  hideFn: () => void
}

function ItemAddModal({ adding, passFn, hideFn }: ItemAddModalProps) {

  const [taskName, setTaskName] = useState("")
  const [date, setDate] = useState(moment())
  
  const taskNameChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  }

  const dateChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(moment(e.target.valueAsDate))
  }

  const todoItemSubmitHandle = () => {
    passFn(date.toString())
    alert("ping")
  }

  return (
  <Modal show={adding}>
    <ModalDialog>
        <ModalHeader>
          <ModalTitle>Modal title</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <input type="text" onChange={taskNameChangeHandle} />
          <input type="date" onChange={dateChangeHandle} />
        </ModalBody>
        <ModalFooter>
          <Button variant="outline-secondary" onClick={hideFn}>Cancel</Button>
          <Button variant="primary" onSubmit={todoItemSubmitHandle}>Ok</Button>
        </ModalFooter>
    </ModalDialog>
  </Modal>
  )
}

export default ItemAddModal