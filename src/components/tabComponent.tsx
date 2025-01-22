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
  flag?: string;
}

const TabsComponent: FC<TabsComponentProps> = ({ tabs, content, flag }) => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]?.value || "");

  const wrapperClassName = flag || "tabs-section";

  return (
    <>
      <div className={wrapperClassName}>
        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="-mt-9 border-solid"
        >
          <TabsList className="bg-transparent w-full md:w-auto overflow-x-scroll md:overflow-hidden">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={`font-poppins mr-2 w-full rounded-t-md md:px-[39px] py-2 text-sm font-medium leading-5 transition-all duration-300 ${
                  selectedTab === tab.value
                    ? "bg-green-300 text-green-500"
                    : "bg-[#F9F9F9] text-[#908B8B]"
                }`}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {content.map((item) => (
            <TabsContent
              key={item.value}
              value={item.value}
              className={`-mb-10 pt-10`}
            >
              {item.component}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default TabsComponent;
