import { Modal, ModalDialog, ModalHeader, ModalBody, ModalTitle, Button, ModalFooter } from "react-bootstrap"

type ItemAddModalProps = {
  adding: boolean,
  passFn: (d: string) => void,
  hideFn: () => void
}

function ItemAddModal({ adding, passFn, hideFn }: ItemAddModalProps) {
  return (
  <Modal show={adding}>
    <ModalDialog>
        <ModalHeader>
          <ModalTitle>Modal title</ModalTitle>
          
        </ModalHeader>
        <ModalBody>
          <p>Add text.</p>
          <input type="number" />
        </ModalBody>
        <ModalFooter>
          <Button variant="primary" onClick={hideFn}>Ok</Button>
        </ModalFooter>
    </ModalDialog>
  </Modal>
  )
}

export default ItemAddModal