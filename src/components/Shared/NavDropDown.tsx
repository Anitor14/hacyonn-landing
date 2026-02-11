import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

type Props = {
  services: {
    title: string;
    items: string[];
    route?: string;
    icon: string;
    type?: string;
  }[];
  setActiveDropdown: Dispatch<SetStateAction<string | null>>;
};

export default function NavDropDown({ services, setActiveDropdown }: Props) {
  const router = useRouter();

  const mainServices = services.slice(0, -1);
  const lastService = services[services.length - 1];

  return (
    <div className="p-4 bg-white/95 dark:bg-[#0B2826]/98 backdrop-blur-xl rounded-[20px] border border-black/5 dark:border-white/5 overflow-hidden w-[95vw] max-w-[900px]">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
        {mainServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.02,
              duration: 0.3,
            }}
            onClick={() => {
              setActiveDropdown(null);
              if (service.type) {
                router.push(`/services/details/?type=${service.type}`);
              } else {
                router.push(service.route || "/");
              }
            }}
            className="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-[#4FBCAA]/5 dark:hover:bg-white/5 transition-colors duration-300 cursor-pointer"
          >
            <div className="w-8 h-8 p-1.5 mt-0.5 bg-[#4FBCAA]/10 rounded-lg flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110 border border-[#4FBCAA]/10">
              <div className="w-full h-full relative">
                <Image
                  src={service.icon}
                  alt="Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-[#1C4540] dark:text-white font-bold text-sm group-hover/item:text-[#4FBCAA] transition-colors truncate tracking-tight mb-0.5">
                {service.title}
              </h3>
              <ul className="flex flex-wrap gap-x-2 gap-y-0.5">
                {service.items.slice(0, 3).map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-[9px] text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider opacity-60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {lastService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-3 pt-3 border-t border-black/5 dark:border-white/5"
        >
          <div
            onClick={() => {
              setActiveDropdown(null);
              router.push(lastService.route || "/");
            }}
            className="group/all flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-white/5 hover:bg-[#4FBCAA] rounded-lg cursor-pointer transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 relative flex-shrink-0 opacity-70 group-hover/all:opacity-100">
                <Image
                  src={lastService.icon}
                  alt="Icon"
                  fill
                  className="object-contain dark:invert group-hover/all:invert-0 group-hover/all:brightness-200"
                />
              </div>
              <span className="text-[#1C4540] dark:text-white font-bold text-xs group-hover/all:text-white transition-colors">
                {lastService.title}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#4FBCAA] group-hover:text-white text-[10px] font-black uppercase tracking-widest">
              <span>View All</span>
              <svg
                className="w-3 h-3 transform transition-all duration-300 group-hover/all:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
