import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function App({ onConfirm, onCancel }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="danger" onPress={onOpen}>Cancel</Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        className="bg-secondary-active"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="flex my-3">Are You Sure?</ModalBody>
              <ModalFooter className="mt-0 pt-0">
                <Button color="danger" onPress={onClose} onClick={onCancel}>
                  No
                </Button>
                <Button className="bg-blue text-white" onPress={onClose} onClick={onConfirm}>
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
