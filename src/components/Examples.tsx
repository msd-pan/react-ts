import { useState } from "react";

import { EXAMPLES } from "@/data";

import { TabButton } from "@/components/TabButton";
import { Section } from "@/components/Section";
import { Tabs } from "@/components/Tabs";

export const Examples = () => {
  type SelectedButton = keyof typeof EXAMPLES;
  const [selectedTopic, setSelectedTopic] = useState<SelectedButton>();

  const handleSelect = (selectedButton: SelectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs>
        <Tabs.Buttons>
          <TabButton
            isSelected={selectedTopic === "components"}
            onClick={() => handleSelect("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onClick={() => handleSelect("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onClick={() => handleSelect("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onClick={() => handleSelect("state")}
          >
            State
          </TabButton>
        </Tabs.Buttons>
        <Tabs.Content>{tabContent}</Tabs.Content>
      </Tabs>
    </Section>
  );
};
