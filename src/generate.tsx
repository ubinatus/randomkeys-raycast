import { useState } from "react";

import { List } from "@raycast/api";

import KeyItem from "./components/key-item";
import { keySections } from "./utils/constants";

export default function Generate() {
  const [isLoading, setIsLoading] = useState(false);

  function reloadAll() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  return (
    <List
      isLoading={isLoading}
      filtering={false}
      searchBarAccessory={
        <List.Dropdown tooltip="Dropdown With Items">
          <List.Dropdown.Item title="One" value="one" />
          <List.Dropdown.Item title="Two" value="two" />
          <List.Dropdown.Item title="Three" value="three" />
        </List.Dropdown>
      }
    >
      {isLoading
        ? []
        : keySections.map((section) => (
            <List.Section key={section.title} title={section.title} subtitle={section.description}>
              <KeyItem type={section.type} reloadAll={reloadAll} />
            </List.Section>
          ))}
    </List>
  );
}
