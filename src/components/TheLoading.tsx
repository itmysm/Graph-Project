import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalBody, Button, useDisclosure } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";

export default function TheLoading({ onShowLoading }: { onShowLoading: Boolean }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {    
    onShowLoading ? onOpen() : onclose
  }, [onShowLoading]);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} hideCloseButton={true} >
        <ModalContent className="w-32 h-32">
          {(onClose) => (
            <>
              <ModalBody className="flex items-center justify-center">
                <Spinner color="warning" />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
