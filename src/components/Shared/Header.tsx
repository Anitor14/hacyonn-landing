"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import NavDropDown from "./NavDropDown";
import NavSales from "../../../public/images/NavSales.svg";
import NavSecurity from "../../../public/images/NavSecurity.svg";
import NavHR from "../../../public/images/NavHR.svg";
import NavSoftware from "../../../public/images/NavSoftware.svg";
import NavDesign from "../../../public/images/NavDesign.svg";
import NavFinance from "../../../public/images/NavFinance.svg";
import NavAll from "../../../public/images/NavAll.svg";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Hacyon from "../../../public/images/Logo.png";

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const aboutDropdown = [
    {
      title: "Sales enablement",
      icon: NavSales,
      type: "sales_enablement",
      items: [
        "Market penetration",
        "Geographic segmentation",
        "Business cost",
        "Sales Performance",
      ],
    },
    {
      title: "Human resources",
      icon: NavHR,
      type: "human_resources",
      items: [
        "Recruitment & Talent Sourcing",
        "Onboarding Automation",
        "Payroll & Tax Management",
        "HR Compliance Support",
      ],
    },
    {
      title: "Software development",
      icon: NavSoftware,
      type: "software_development",
      items: [
        "Custom Web Development",
        "Custom Mobile App Development",
        "MVP Development for Startups",
        "Maintenance & Support",
      ],
    },
    {
      title: "Cyber security",
      icon: NavSecurity,
      type: "cyber_security",
      items: [
        "Security Audits & Risk Assessments",
        "Network & Endpoint Protection",
        "Cloud Security Configuration",
        "Incident Response Planning",
      ],
    },
    {
      title: "Design",
      icon: NavDesign,
      type: "design",
      items: [
        "UI/UX Design",
        "Design Systems",
        "Web Design",
        "Mobile App Design",
      ],
    },
    {
      title: "Financial analysis",
      icon: NavFinance,
      type: "financial_analysis",
      items: [
        "Financial Modeling & Forecasting",
        "Cash Flow Management",
        "Fundraising Financial Plan",
        "Profit & Loss (P&L) Analysis",
      ],
    },
    {
      title: "All services",
      route: "/services",
      icon: NavAll,
      items: [""],
    },
  ];

  const industriesDropdown = [
    {
      title: "Health care",
      icon: NavSales,
      route: "/industries/healthcare",
      items: ["Empowering healthcare through smarter tech."],
    },
    {
      title: "Education",
      icon: NavHR,
      route: "/industries/education",
      items: ["Empowering schools and edtech teams to scale smarter"],
    },
    {
      title: "Financial",
      icon: NavSoftware,
      route: "/industries/finance",
      items: ["Secure, Compliant Digital Solutions for Financial Institutions"],
    },
    {
      title: "Direct sales",
      icon: NavSecurity,
      route: "/industries/sales",
      items: ["Empower your sales force: Hacyon for direct sales teams"],
    },
    {
      title: "Retail",
      icon: NavDesign,
      route: "/industries/retail",
      items: ["Revolutionize retail experiences with digital precision"],
    },
    {
      title: "Logistics",
      icon: NavFinance,
      route: "/industries/transportation",
      items: ["Drive efficiency and visibility in logistics operations"],
    },
    {
      title: "All industries",
      icon: NavAll,
      route: "/industries",
      items: [""],
    },
  ];

  const navLinks = [
    {
      label: "About Us",
      route: "/about",
      hasDropdown: false,
    },
    {
      label: "Innovation hub",
      route: "/innovation-hub",
      hasDropdown: false,
    },
    {
      label: "AI Community",
      route: "/ai-community",
      hasDropdown: false,
    },
    {
      label: "Services",
      route: "/services",
      hasDropdown: true,
      dropdown: aboutDropdown,
    },
    {
      label: "Products",
      route: "/products",
    },
    {
      label: "Industries",
      route: "/industries",
      hasDropdown: true,
      dropdown: industriesDropdown,
    },
    // { label: "Blog", route: "/blog" },
    // { label: "Contact", route: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => setActiveDropdown(null);
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("nav")) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const isLightPage = [
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ].some((path) => pathname.includes(path));

  const navTextColor = isLightPage
    ? "text-[#1C4540]"
    : scrolled
      ? "text-[#1C4540] dark:text-white"
      : "text-white";

  return (
    <div className="fixed top-0 left-0 w-full z-[99] pointer-events-none">
      <header
        className={`w-full transition-all duration-200 ease-in-out pointer-events-auto ${
          scrolled
            ? "max-w-[1400px] mt-4 mx-auto bg-white/60 dark:bg-[#1C4540]/80 backdrop-blur-2xl border border-white/20 rounded-3xl py-2 px-6 shadow-lg shadow-black/5"
            : "max-w-full bg-transparent py-8 px-10"
        } ${navTextColor}`}
      >
        <div className="flex items-center justify-between w-full max-w-[1400px] mx-auto">
          <Link
            href="/"
            className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden rounded-2xl ring-1 ring-white/20">
              <Image
                src={Hacyon}
                alt="Hacyon"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {!scrolled && (
              <span className="hidden lg:block font-black text-2xl tracking-tighter uppercase italic">
                Hacyon
              </span>
            )}
          </Link>

          <nav className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/5 backdrop-blur-md rounded-full p-1.5 border border-white/10 ring-1 ring-black/5">
            {navLinks.map((item, i) => (
              <div key={i} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onClick={() =>
                        setActiveDropdown((prev) =>
                          prev === item.label ? null : item.label,
                        )
                      }
                      className={`px-5 py-2.5 rounded-full text-sm lg:text-base font-bold cursor-pointer flex items-center gap-2 transition-all duration-500 ${
                        activeDropdown === item.label
                          ? "bg-[#4FBCAA] text-white"
                          : "hover:bg-white/20 hover:text-[#4FBCAA] dark:hover:text-white"
                      }`}
                    >
                      {item.label}
                      <motion.span
                        animate={{
                          rotate: activeDropdown === item.label ? 180 : 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                      >
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 15,
                            scale: 0.95,
                            filter: "blur(10px)",
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: "blur(0px)",
                          }}
                          exit={{
                            opacity: 0,
                            y: 10,
                            scale: 0.95,
                            filter: "blur(10px)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 35,
                          }}
                          onMouseLeave={() => setActiveDropdown(null)}
                          className={`fixed left-1/2 -translate-x-1/2 w-screen flex justify-center z-50 pointer-events-auto ${
                            scrolled ? "top-[4.5rem]" : "top-[6rem]"
                          }`}
                        >
                          <NavDropDown
                            services={item.dropdown!}
                            setActiveDropdown={setActiveDropdown}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.route}
                    className={`px-5 py-2.5 rounded-full text-sm lg:text-base font-bold transition-colors duration-150 relative isolate ${
                      pathname === item.route
                        ? "text-white"
                        : "hover:text-[#4FBCAA]"
                    }`}
                  >
                    {item.label}
                    {pathname === item.route && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-[#4FBCAA] rounded-full -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 35,
                        }}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={`hidden md:flex items-center gap-2 px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 group overflow-hidden relative ${
                scrolled
                  ? "bg-[#1C4540] text-white hover:bg-[#4FBCAA]"
                  : "bg-white text-[#1C4540] hover:scale-105"
              }`}
            >
              <span className="relative z-10">Get Started</span>
              <svg
                className="w-4 h-4 transform transition-transform duration-500 group-hover:translate-x-2 relative z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className={`p-3 rounded-2xl md:hidden transition-all duration-300 hover:scale-110 active:scale-95 ${scrolled ? "bg-[#1C4540]/5" : "bg-white/10"}`}
            >
              <Menu size={24} className="stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Mobile menu 2.0 - Ultra Minimalist Refinement */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-md z-[98]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 35, stiffness: 400 }}
                className="fixed top-0 right-0 w-[280px] h-screen bg-white dark:bg-[#0B2826] border-l border-black/5 dark:border-white/5 z-[99] flex flex-col"
              >
                {/* Slim Header */}
                <div className="flex justify-end p-6">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-[#1C4540] dark:text-white hover:text-[#4FBCAA] transition-colors"
                  >
                    <X size={20} strokeWidth={3} />
                  </button>
                </div>

                <div className="flex-1 px-8 py-4">
                  <div className="flex flex-col gap-8">
                    {navLinks.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.1 + i * 0.05,
                          duration: 0.4,
                        }}
                      >
                        <Link
                          href={item.route}
                          onClick={() => setIsOpen(false)}
                          className={`group flex items-center gap-3 transition-all duration-300`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              pathname === item.route
                                ? "bg-[#4FBCAA] scale-100"
                                : "bg-[#4FBCAA]/0 group-hover:bg-[#4FBCAA]/50 scale-0 group-hover:scale-100"
                            }`}
                          />
                          <span
                            className={`text-[11px] font-black uppercase tracking-[0.3em] transition-colors ${
                              pathname === item.route
                                ? "text-[#4FBCAA]"
                                : "text-[#1C4540]/80 dark:text-white/80 hover:text-[#4FBCAA]"
                            }`}
                          >
                            {item.label}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="p-8 pb-12">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex justify-center items-center h-12 bg-[#1C4540] dark:bg-white text-white dark:text-[#1C4540] rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#4FBCAA] dark:hover:bg-[#4FBCAA] dark:hover:text-white transition-all group"
                  >
                    <span>Let's Connect</span>
                    <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;
