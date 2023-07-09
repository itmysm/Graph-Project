
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function ConfirmAlert({ onConfirmAnswer, showModal, title }) {
  const [visible, setVisible] = useState(false);

  const closeHandler = (status = false) => {
    console.log(status);
    onConfirmAnswer(status)
    setVisible(false);
  };

  useEffect(() => {
    setVisible(showModal)
  }, [showModal])

  return (
    <Modal
      className="bg-secondary-active border border-gray-text/10 shadow-none drop-shadow-none	"
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={() => closeHandler(false)}
    >
      <Modal.Body>
        <Row justify="space-between">
          <Text id="modal-title" size={18}>
            {title || 'Are you sure you want to do this?'}
          </Text>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button className='bg-red text-white' auto flat onPress={() => closeHandler(false)}>
          Cancel
        </Button>
        <Button className="bg-info" auto onPress={() => closeHandler(true)}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
