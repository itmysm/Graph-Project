import { useEffect, useState } from "react";
import { Select, SelectItem, Tooltip } from "@nextui-org/react";
import { shortText } from "@/lib/general";

type SelectorProps = {
  list: object,
  limit?: number,
}

export default function Selector() {
  const [values, setValues] = useState<{ value: string; label: string }[]>([]);

  const onControlSelectedItem = (e) => {
    console.log(e);
  };

  const x = [{ value: "sss", label: "sss" }, { value: "sss2", label: "s2ss" }];

  return (
    <Tooltip content="I am a tooltip">
      <Select
        size="sm"
        placeholder="Select People up to 5"
        selectionMode="multiple"
        className="max-w-xs"
        aria-label="peoples"
        
        onChange={onControlSelectedItem}
      >
        {x.map((people) => (
          <SelectItem key={people.value} value={people.value}>
            {shortText(people.label, 25)}
          </SelectItem>
        ))}
      </Select>
    </Tooltip>
  );
}
