"use client";
import { useGetFaqsQuery } from "~/store/api/faqsApi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { useState } from "react";

const Spinner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-8 w-8 border-4 border-[#49AD91] border-t-transparent"></div>
  </div>
);

export default function Faqs() {
  const { data: faqs, isLoading } = useGetFaqsQuery({});
  const [expandedItem, setExpandedItem] = useState(null);

  const handleToggle = (id) => {
    setExpandedItem(expandedItem === id ? null : id); // Toggle the expanded state
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }
  
  return (
    <main>
      <div className="accordion-wrapper max-w-[1075px] mx-auto">
        <div className="my-[50px] text-center">
          <h1 className="text-3xl font-semibold text-black md:text-[48px]">FAQs</h1>
        </div>
        {faqs && faqs.data && (
          <Accordion type="single" collapsible className="w-full accordion-container">
            {faqs.data.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="py-1 md:py-5"
              >
                <AccordionTrigger
                  onClick={() => handleToggle(faq.id)}
                  style={{alignItems: "flex-start"}}
                  className="flex items-start gap-3 text-left no-underline hover:no-underline focus:no-underline"
                >
                  <span className="min-w-[30px] text-lg font-medium transition-colors md:text-2xl">
                    {String(faq.id).padStart(2, "0")}
                  </span>
                  <p className="flex-1 text-lg text-black font-medium md:text-2xl">
                    {faq.question}
                  </p>
                  <p className="text-lg font-medium md:text-2xl">
                    {expandedItem === faq.id ? "-" : "+"}
                  </p>
                </AccordionTrigger>
                <AccordionContent className="ml-[40px] text-sm text-[#0B0A0A] md:text-[18px]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </main>
  );
}
