import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";

type modalProps = {
  items: { name: string }[];
  modalAction: boolean;
  onModelClose: () => void;
  onSetChanges: (list: []) => void;
};

export default function UserListModal({
  items,
  modalAction,
  onModelClose,
  onSetChanges,
}: modalProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState(null);
  const [filteredItems, setFilteredItems] = useState(items);
  const closeModal = () => {
    onModelClose();
    onClose();
  };

  const selectedValue: string = React.useMemo(() => {
    if (selectedKeys) {
      return Array.from(selectedKeys).join(", ");
    } else {
      return "";
    }
  }, [selectedKeys]);

  const [settings, setSettings] = useState({
    minItem: 2,
    maxItem: 10,
  });

  useEffect(() => {
    modalAction ? onOpen() : closeModal();
  }, [modalAction]);

  useEffect(() => {
    setFilteredItems(
      items.filter((item) => item.name.includes(searchBoxValue))
    );
  }, [searchBoxValue]);

  const appendChanges = () => {
    onClose();
    onSetChanges(selectedKeys);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="min-h-[400px] max-h-[400px]"
        isDismissable={false}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p> Select Users From List</p>
                <Input
                  placeholder="Search"
                  value={searchBoxValue}
                  onValueChange={setSearchBoxValue}
                  isClearable
                  size="sm"
                  className="mt-2"
                  startContent={<FiSearch />}
                />
              </ModalHeader>
              <ModalBody className="overflow-y-auto">
                <div>
                  <Listbox
                    aria-label="Multiple selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="multiple"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                  >
                    {filteredItems.map((item, index) => (
                      <ListboxItem className="select-none" key={index}>
                        {item.name}
                      </ListboxItem>
                    ))}
                  </Listbox>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="default"
                  variant="bordered"
                  onPress={closeModal}
                >
                  Close
                </Button>

                <Button
                  isDisabled={
                    selectedValue.split(",").length >= settings.minItem &&
                    selectedValue.split(",").length <= settings.maxItem
                      ? false
                      : true
                  }
                  color="primary"
                  onPress={appendChanges}
                >
                  Append
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
