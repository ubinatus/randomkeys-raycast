import { useMemo, useState } from "react";

import { List } from "@raycast/api";

import { KeyEnum } from "./utils/generator";
import KeyItem from "./components/key-item";
import { keySections } from "./utils/constants";
import KeyDropdown from "./components/key-dropdown";

export default function Generate() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedType, setSelectedType] = useState<KeyEnum | "all">("all");

  function reloadAll() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  const { filteredSections, keys } = useMemo(() => {
    const showAll = selectedType === "all";
    const sections = keySections.filter((section) => showAll || section.type === selectedType);
    return {
      filteredSections: sections,
      keys: new Array(showAll ? 1 : 6).fill(0),
    };
  }, [selectedType]);

  return (
    <List isLoading={isLoading} filtering={false} searchBarAccessory={<KeyDropdown onChange={setSelectedType} />}>
      {isLoading
        ? []
        : filteredSections.map((section) => (
            <List.Section key={section.title} title={section.title} subtitle={section.description}>
              {keys.map((_, keyIdx) => (
                <KeyItem key={keyIdx} type={section.type} reloadAll={reloadAll} />
              ))}
            </List.Section>
          ))}
    </List>
  );
}
