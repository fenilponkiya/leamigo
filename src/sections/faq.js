import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordionData } from "@/utils/data";
import React from "react";

export const Faq = () => {
  const [openAccordion, setOpenAccordion] = React.useState(null);

  const handleToggle = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };
  return (
    <>
      <p className="font-bold my-6 text-2xl ">FAQ</p>

      <Accordion type="single" collapsible>
        {accordionData.map(({ id, title, desc }) => {
          return (
            <AccordionItem value={`item ${id}`}>
              <AccordionTrigger
                isOpen={openAccordion === `accordion-${id}`}
                onToggle={() => handleToggle(`accordion-${id}`)}
                id={`accordion-${id}`}
                className="font-semibold text-sm"
              >
                {title}
              </AccordionTrigger>
              <AccordionContent>{desc}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};
