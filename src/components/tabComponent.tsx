"use client";

import { FC, ReactNode, useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

// Define types for the tabs and content props
interface Tab {
  value: string;
  label: string;
}

interface TabContent {
  value: string;
  component: ReactNode;
}

interface TabsComponentProps {
  tabs: Tab[];
  content: TabContent[];
}

const TabsComponent: FC<TabsComponentProps> = ({ tabs, content }) => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]?.value || "");

  // Log to verify that the tabs are populated correctly
  useEffect(() => {
    console.log("Selected Tab: ", selectedTab);
  }, [selectedTab]);

  return (
    <Tabs
      value={selectedTab}
      onValueChange={setSelectedTab}
      className="border-solid"
    >
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="font-poppins w-full bg-[#F1FBFF] px-2 py-2.5 text-sm font-medium leading-5 text-[#908B8B] ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {content.map((item) => (
        <TabsContent key={item.value} value={item.value}>
          {item.component}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsComponent;
