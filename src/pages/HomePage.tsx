import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { GenericHeader } from "../components/layout/GenericHeader";
import { PromoCard } from "../components/home/PromoCard";
import { PriceCards } from "../components/home/PriceCards";
import { ConverterCard } from "../components/home/ConverterCard";
import { useConverter } from "../hooks/useConverter";
import { PaginationDots } from "../components/home/PaginationDots";
import { TransactionSection } from "../components/home/TransactionSection";
import { HomeProduct } from "./HomeProduct";

// Animation variants for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Animation variants for items
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Smooth easing
    },
  },
};

// Mobile-specific variants (more pronounced animations)
const mobileItemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Scroll-triggered animation component
const ScrollReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  isMobile?: boolean;
}> = ({ children, className = "", delay = 0, isMobile = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const variants = isMobile ? mobileItemVariants : itemVariants;

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        delay,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

// Hook to detect mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

export const HomePage = () => {
  const [activeToggle, setActiveToggle] = useState("buy");
  const { gram, aed, handleGramChange, handleAedChange } = useConverter();
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <>
      <GenericHeader />
      <motion.div
        ref={containerRef}
        className="p-4 flex flex-col gap-6 pt-16"
        variants={containerVariants}
        initial="hidden"
        animate={isContainerInView ? "visible" : "hidden"}
      >
        <ScrollReveal delay={0} isMobile={isMobile}>
          <PromoCard />
        </ScrollReveal>

        <ScrollReveal delay={0.1} isMobile={isMobile}>
          <PaginationDots />
        </ScrollReveal>

        <ScrollReveal delay={0.2} isMobile={isMobile}>
          <PriceCards />
        </ScrollReveal>

        <ScrollReveal delay={0.3} isMobile={isMobile}>
          <TransactionSection
            activeToggle={activeToggle}
            setActiveToggle={setActiveToggle}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.4} isMobile={isMobile}>
          <ConverterCard
            gram={gram}
            aed={aed}
            onGramChange={handleGramChange}
            onAedChange={handleAedChange}
          />
        </ScrollReveal>

        <motion.button
          className="w-full py-4 bg-[#8A1538] text-white border-none rounded-xl text-lg font-semibold cursor-pointer mt-4 hover:bg-[#8A1538]/90 transition-colors"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={
            isContainerInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 20, scale: 0.95 }
          }
          transition={{
            delay: 0.5,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: isMobile ? 0.98 : 1.02,
            boxShadow: "0 10px 25px rgba(138, 21, 56, 0.3)",
          }}
          whileTap={{
            scale: 0.96,
          }}
        >
          {activeToggle === "buy" ? "Buy" : "Sell"}
        </motion.button>

        <ScrollReveal delay={0.6} isMobile={isMobile}>
          <HomeProduct />
        </ScrollReveal>
      </motion.div>
    </>
  );
};
