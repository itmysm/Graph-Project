
import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalFooter } from "@nextui-org/modal";


import { useEffect, useState } from "react";

export default function ConfirmAlert({ onConfirmAnswer, showModal, title }) {
  const [visible, setVisible] = useState(false);

  const closeHandler = (status = false) => {
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
      <ModalBody>
        <div className="flex justify-between">
          <p className="text-base" id="modal-title">
            {title || 'Are you sure you want to do this?'}
          </p>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button className='bg-red text-white' auto flat onPress={() => closeHandler(false)}>
          Cancel
        </Button>
        <Button className="bg-info" auto onPress={() => closeHandler(true)}>
          Yes
        </Button>
      </ModalFooter>
    </Modal>
  )
}
