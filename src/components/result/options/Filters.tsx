import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, ButtonGroup } from "@nextui-org/react";
import { FiFilter } from "react-icons/fi";

export default function Filters() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button variant="light" onPress={onOpen}>
        <FiFilter />
        Filters
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Filters</ModalHeader>
              <ModalBody>
                <div className="flex items-start flex-col">
                  <p>How to display people in statistics</p>

                  <ButtonGroup className="mt-5">
                    <Button>Automatic</Button>
                    <Button>Active users</Button>
                    <Button>Custom</Button>
                  </ButtonGroup>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
