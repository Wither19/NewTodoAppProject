import moment, { type Moment } from "moment"
import { useState, type ChangeEvent } from "react"
import { Modal, ModalDialog, ModalHeader, ModalBody, ModalTitle, Button, ModalFooter } from "react-bootstrap"

type ItemAddModalProps = {
  adding: boolean,
  passFn: (d: string) => void,
  hideFn: () => void
}

function ItemAddModal({ adding, passFn, hideFn }: ItemAddModalProps) {

  const [date, setDate] = useState<Moment>(moment())
  
  const dateChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(moment(e.target.valueAsDate))
  }

  const todoItemSubmitHandle = () => {
    passFn(date.toString())
    hideFn()
  }

  return (
  <Modal show={adding}>
    <ModalDialog>
        <ModalHeader>
          <ModalTitle>Modal title</ModalTitle>
        </ModalHeader>
        <ModalBody>
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