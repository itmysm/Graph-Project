import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function App({ onConfirmAnswer, showModal }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    console.log(showModal);
    if (showModal) onOpen;
  }, [showModal]);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Cancel Operation
              </ModalHeader>
              <ModalBody>
                <div className="flex py-2 px-1 justify-between">
                  <p>Are you sure you want close operation?</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  No
                </Button>
                <Button color="primary" onPress={[onClose, onConfirm(true)]}>
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
