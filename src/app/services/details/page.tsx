"use client";
import Hero from "@/components/Services/Hero";
import React, { Suspense, useState, useEffect, useRef } from "react";
import SalesEnablement from "@/components/Services/SalesEnablement";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Container from "@/components/Shared/Container";
import ContactUs from "@/components/Services/ContactUs";
import SoftwareDevelopment from "@/components/Services/SoftwareDevelopment";
import HumanResources from "@/components/Services/HumanResources";
import Design from "@/components/Services/Design";
import CyberSecurity from "@/components/Services/CyberSecurity";
import FinancialAnalysis from "@/components/Services/FinancialAnalysis";
import Entrepreneurship from "@/components/Services/Entrepreneurship";
import { useSearchParams } from "next/navigation";

const tabItems = [
  { value: "sales_enablement", label: "Sales enablement" },
  { value: "software_development", label: "Software Development" },
  { value: "human_resources", label: "Human Resources" },
  { value: "design", label: "Design" },
  { value: "cyber_security", label: "Cyber security" },
  { value: "entrepreneurship", label: "Entrepreneurship" },
  { value: "financial_analysis", label: "Financial analysis" },
];

const tabTriggerStyles =
  "relative px-6 py-2.5 text-xs md:text-sm font-bold tracking-tight transition-all duration-300 rounded-full border border-transparent data-[state=active]:bg-[#4FBCAA] data-[state=active]:text-white data-[state=inactive]:bg-black/5 dark:data-[state=inactive]:bg-white/5 dark:data-[state=inactive]:text-[#1C4540]/60 dark:dark:data-[state=inactive]:text-white/60 hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer whitespace-nowrap";

const PageContent = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const [activeTab, setActiveTab] = useState(type || "sales_enablement");

  const tabSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToTabSection = () => {
    const element = tabSectionRef.current;
    if (element) {
      const yOffset = -120;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (type) {
      setActiveTab(type);
      setTimeout(() => {
        scrollToTabSection();
      }, 100);
    }
  }, [type]);

  return (
    <div className="overflow-x-hidden bg-white dark:bg-[#0B2826]">
      <Hero />
      <div ref={tabSectionRef} className="h-1"></div>

      <div className="relative mt-10 z-20">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <Container className="py-2 overflow-visible">
            <div className="relative">
              <TabsList className="w-full flex items-center justify-start md:justify-center gap-3 bg-transparent h-auto p-1 overflow-x-auto no-scrollbar scroll-smooth">
                {tabItems.map((item) => (
                  <TabsTrigger
                    key={item.value}
                    className={tabTriggerStyles}
                    value={item.value}
                  >
                    {item.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Container>

          <div className="mt-12 lg:mt-20 relative">
            <TabsContent
              value="sales_enablement"
              className="focus-visible:outline-none"
            >
              <SalesEnablement />
            </TabsContent>

            <TabsContent
              value="software_development"
              className="focus-visible:outline-none"
            >
              <SoftwareDevelopment />
            </TabsContent>

            <TabsContent
              value="human_resources"
              className="focus-visible:outline-none"
            >
              <HumanResources />
            </TabsContent>

            <TabsContent value="design" className="focus-visible:outline-none">
              <Design />
            </TabsContent>

            <TabsContent
              value="cyber_security"
              className="focus-visible:outline-none"
            >
              <CyberSecurity />
            </TabsContent>

            <TabsContent
              value="entrepreneurship"
              className="focus-visible:outline-none"
            >
              <Entrepreneurship />
            </TabsContent>

            <TabsContent
              value="financial_analysis"
              className="focus-visible:outline-none"
            >
              <FinancialAnalysis />
            </TabsContent>
          </div>
        </Tabs>
      </div>

      <ContactUs />
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
};

export default Page;
