"use client";
import { useGetFaqsQuery } from "~/store/api/faqsApi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { useState } from "react";

export default function Page() {
  const { data: faqs } = useGetFaqsQuery({});
  const [expandedItem, setExpandedItem] = useState(null);

  const handleToggle = (id) => {
    setExpandedItem(expandedItem === id ? null : id); // Toggle the expanded state
  };

  return (
    <main>
      <div className="accordion-wrapper max-w-[1075px] mx-auto mb-16 px-3 py-7 lg:px-7 xl:px-10">
        <div className="my-[50px] text-center">
          <h1 className="text-3xl font-semibold md:text-[48px]">FAQs</h1>
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
                  <p className="flex-1 text-lg font-medium md:text-2xl">
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
