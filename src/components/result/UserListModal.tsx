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
import { ChartRules } from "@/types/charts";

type modalProps = {
  participation: { [key: string]: string };
  modalStatus: boolean;
  onModelClose: () => void;
  onSetChanges: (participation: string[]) => void;
  rules: ChartRules;
};

export default function UserListModal({
  participation,
  modalStatus,
  onModelClose,
  onSetChanges,
  rules,
}: modalProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const [itemsList, setItemsList] = useState(new Set("0"));
  const [filteredItems, setFilteredItems] = useState(
    Object.keys(participation)
  );

  const closeModal = () => {
    onModelClose();
    onClose();
  };

  const selectedItemsInList: string = React.useMemo(
    () => Array.from(itemsList).join(", "),
    [itemsList]
  );

  useEffect(() => {
    modalStatus ? onOpen() : closeModal();
  }, [modalStatus]);

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
    onSetChanges(
      selectedItemsInList
        .replaceAll(" ", "")
        .split(",")
        .map((item, index) => filteredItems[item])
    );

    onClose();
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
                    selectedKeys={itemsList}
                    onSelectionChange={setItemsList}
                  >
                    {filteredItems.map((item, index) => (
                      <ListboxItem className="select-none" key={index}>
                        {participation[item]}
                      </ListboxItem>
                    ))}
                  </Listbox>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="bordered" onPress={closeModal}>
                  Close
                </Button>

                <Button
                  isDisabled={
                    selectedItemsInList.split(",").length >= rules.minItems &&
                    selectedItemsInList.split(",").length <= rules.maxItems
                      ? false
                      : true
                  }
                  color="primary"
                  onPress={() => {
                    appendChanges();
                    closeModal();
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
