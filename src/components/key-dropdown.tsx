import { List } from "@raycast/api";

import { KeyEnum } from "../utils/generator";
import { keySections } from "../utils/constants";

type Props = {
  onChange: (type: KeyEnum | "all") => void;
};

const KeyItems = () => (
  <>
    {keySections.slice(0, 4).map((section) => (
      <List.Dropdown.Item key={section.type} title={section.title} value={String(section.type)} />
    ))}
  </>
);

export default function KeyDropdown({ onChange }: Props) {
  return (
    <List.Dropdown
      tooltip="Select Key Type"
      storeValue={true}
      defaultValue="all"
      onChange={(val) => onChange(val === "all" ? val : (Number(val) as KeyEnum))}
    >
      <List.Dropdown.Item title="All" value="all" />
      <List.Dropdown.Section>
        <KeyItems />
      </List.Dropdown.Section>
    </List.Dropdown>
  );
}
