import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";
import DragAndDropArea from "./DragDropArea";

type Props = {
  showDialog: Boolean;
  onCloseDialog: (status: Boolean) => void;
};

export default function Uploader({ showDialog, onCloseDialog }: Props) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [modalPlacement, setModalPlacement] = useState("auto");

  useEffect(() => {
    showDialog ? onOpen() : onclose;
  }, [showDialog]);

  return (
    <div className="flex flex-col gap-2">
      <Modal isOpen={isOpen} placement="auto" onOpenChange={onOpenChange} hideCloseButton onClose={() => onCloseDialog(false)}>
        <ModalContent className="min-w-[700px] border border-gray/20 bg-gradient-secondary">
          {(onClose) => (
            <>
              <ModalBody className="py-10">
                <DragAndDropArea />
              </ModalBody>
              <ModalFooter>
                <Button className="text-contrast font-semibold bg-secondary hover:bg-secondary/90 rounded-lg" onPress={onClose}>
                  Close
                </Button>
                <Button className="text-contrast font-semibold bg-info hover:bg-info/90 hover:text-contrast/80 rounded-lg" disabled={true} onPress={onClose}>
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
