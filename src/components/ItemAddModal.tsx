import moment, { type Moment } from "moment"
import { useState } from "react"
import { Modal, ModalDialog, ModalHeader, ModalBody, ModalTitle, Button, ModalFooter } from "react-bootstrap"

type ItemAddModalProps = {
  adding: boolean,
  passFn: (d: string) => void,
  hideFn: () => void
}

function ItemAddModal({ adding, passFn, hideFn }: ItemAddModalProps) {

  const [date, setDate] = useState<Moment>(moment())

  return (
  <Modal show={adding}>
    <ModalDialog>
        <ModalHeader>
          <ModalTitle>Modal title</ModalTitle>
          
        </ModalHeader>
        <ModalBody>
          <p>Add text.</p>
          <input type="date" onChange={e => {
            setDate(moment(e.target.valueAsDate))
          }} />
        </ModalBody>
        <ModalFooter>
          <Button variant="primary" onClick={hideFn}>Ok</Button>
        </ModalFooter>
    </ModalDialog>
  </Modal>
  )
}

export default ItemAddModal