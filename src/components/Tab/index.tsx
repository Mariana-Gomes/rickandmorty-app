import React from "react";
import { FlatList } from "react-native";
import { Filter } from "../Filter";
import { ContainerFilters } from "./styles";

type TabProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export enum Tabs {
  CHARACTERS = "Personagens",
  EPISODES = "Episódios",
  FAVORITES = "Favoritos",
}

export function Tab({ activeTab, setActiveTab }: TabProps) {
  const tabs = [Tabs.CHARACTERS, Tabs.EPISODES, Tabs.FAVORITES];
  return (
    <ContainerFilters>
      <FlatList
        data={tabs}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Filter
            title={item}
            isActive={item === activeTab}
            onPress={() => setActiveTab(item)}
          />
        )}
        horizontal
      />
    </ContainerFilters>
  );
}
