"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "../Shared/Container";
import { faqQuestions } from "@/lib/data";

const Faq = () => {
  return (
    <div className="bg-white py-[64px]">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-1.5 md:space-y-2.5">
          <h2 className="text-[36px] font-bold text-[#213B3C]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#213B3C] text-[18px] max-w-[425px] font-medium leading-[28px]">
            Do you have a project or question in mind? We are here to help,
            reach out to us.
          </p>
        </div>
        <div className="space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqQuestions.map((question) => (
              <AccordionItem key={question.id} value={question.id}>
                <AccordionTrigger className="text-[#213B3C] text-[24px] font-medium leading-[28px]">
                  {question.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#213B3C] text-[18px] font-medium leading-[28px]">
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
