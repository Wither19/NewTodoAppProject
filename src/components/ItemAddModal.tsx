import { Modal, ModalDialog, ModalHeader, ModalBody, ModalTitle, ModalFooter } from "react-bootstrap"

type ItemAddModalProps = {
  passFn: (d: string) => void
}

function ItemAddModal({ passFn }: ItemAddModalProps) {
  return (
  <Modal className="fade" id="item-add-modal" tabindex="-1">
    <ModalDialog>
      <div>
        <ModalHeader>
          <ModalTitle>Modal title</ModalTitle>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </ModalHeader>
        <ModalBody>
          <p>Modal body text goes here.</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onSubmit={() => {
            passFn("pootis")
          }}>Save changes</button>
        </ModalFooter>
      </div>
    </ModalDialog>
  </Modal>
  )
}

export default ItemAddModal