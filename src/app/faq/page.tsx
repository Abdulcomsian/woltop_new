"use client";
import { useGetFaqsQuery } from "~/store/api/faqsApi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export default function Page() {
  const { data: faqs } = useGetFaqsQuery({});

  return (
    <main className="">
      <div className="accordion-wrapper container mx-auto mb-16 mt-24 px-3 py-7 lg:container lg:m-auto lg:px-7 xl:px-10">
        <div className="text-center my-[50px]">
          <h1 className="font-bold text-[64px]">FAQs</h1>
        </div>
        {faqs && faqs.data && (
          <Accordion type="single" collapsible className="w-full">
            {faqs.data.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`} className="py-5">
                <AccordionTrigger className="text-[24px] font-medium">
                  {faq.id} { faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[18px]">
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
