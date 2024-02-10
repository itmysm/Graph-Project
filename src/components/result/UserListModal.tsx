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
  Select,
  SelectItem,
} from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";

type modalProps = {
  participation: { [key: string]: string };
  modalAction: boolean;
  onModelClose: () => void;
  onSetChanges: (participation: string[]) => void;
};

export default function UserListModal({
  participation,
  modalAction,
  onModelClose,
  onSetChanges,
}: modalProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState(
    new Set(Object.keys(participation)[0])
  );
  const [filteredItems, setFilteredItems] = useState([]);

  // status 0 mean no filters add ans 1 means some filters selected
  const closeModal = (status = 0) => {
    onModelClose();
    onClose();

    if (status == 1) setSelectedKeys(new Set("0"));
  };

  const selectedValue: string = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  const [settings, setSettings] = useState({
    minItem: 2,
    maxItem: 10,
  });

  useEffect(() => {
    modalAction ? onOpen() : closeModal();
  }, [modalAction]);

  useEffect(() => {
    let list;
    if (searchBoxValue.length) {
      list = Object.keys(participation).filter(
        (key) =>
          participation[key]
            .toLowerCase()
            .includes(searchBoxValue.toLowerCase()) && key
      );
    } else {
      list = Object.keys(participation);
    }

    setFilteredItems(list);
  }, [searchBoxValue]);

  const appendChanges = () => {
    const selectedItems = Object.keys(participation).filter((item) => {
      return participation[item].includes(searchBoxValue);
    });

    onClose();
    onSetChanges(selectedItems);
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
                        {participation[item]}
                      </ListboxItem>
                    ))}
                  </Listbox>
                </div>
              </ModalBody>
              {filteredItems.length}
              <ModalFooter>
                <Button color="default" variant="bordered" onPress={closeModal}>
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
                  onPress={() => {
                    appendChanges();
                    closeModal(1);
                  }}
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
