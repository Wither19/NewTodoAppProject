import { Button } from "react-bootstrap"

type ItemAddButtonProps = {
  click: () => void,
  adding: boolean
}

function ItemAddButton({ click, adding }: ItemAddButtonProps) {
  return <Button variant={adding ? "outline-secondary" : "primary"} onClick={click}>Add New</Button>
}

export default ItemAddButton