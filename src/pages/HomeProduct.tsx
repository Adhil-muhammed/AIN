import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import DGGramGoldMint from "@/assets/svg/homePage/DG-Gram-Gold-Mint.svg";
import EmeraldChain from "@/assets/svg/homePage/Emerald-chain.svg";
import GoldenEarrings from "@/assets/svg/homePage/Golden-earrings.svg";
import GoldenChain from "@/assets/svg/homePage/Golden-chain.png";
import PeacockGoldEarring from "@/assets/svg/homePage/Peacock-Gold-Earring.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom easing for smooth feel
    },
  },
};

const gridItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Scroll-triggered animation component
const ScrollReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export const HomeProduct: React.FC = () => {
  return (
    <motion.div
      className="mx-auto max-w-md p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Wallet Balance Card */}
      <motion.div
        className="mb-8 rounded-lg bg-[#fdf8f6] p-4 shadow-sm"
        variants={itemVariants}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center text-sm text-[#8c1d40] mb-1">
              <span className="material-icons-outlined text-base mr-2">
                account_balance_wallet
              </span>
              <span className="font-medium">Wallet Balance</span>
            </div>
            <p className="text-2xl font-bold text-[#1f2937]">
              12.45743 <span className="text-base font-normal">gm</span>
            </p>
            <p className="text-sm text-[#6b7280]">3245 AED</p>
          </div>
          <motion.button
            className="bg-[#8c1d40] text-white flex items-center justify-center px-4 py-2 rounded-md font-medium text-sm"
            whileTap={{ scale: 0.95 }}
            whileHover={{ opacity: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="material-icons-outlined text-base mr-1.5">
              add_circle_outline
            </span>
            Deposit
          </motion.button>
        </div>
      </motion.div>

      {/* Coin & Bars Section */}
      <ScrollReveal className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-[#1f2937]">Coin & Bars</h2>
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            className="bg-[#fdf8f6] rounded-lg overflow-hidden flex flex-col shadow-sm"
            variants={gridItemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <img
              alt="A 1 gram gold mint bar"
              className="w-full h-auto object-cover aspect-square"
              src={DGGramGoldMint}
            />
            <div className="p-3 text-center flex flex-col flex-grow">
              <h3 className="text-sm font-medium text-[#1f2937] flex-grow">
                DG 1 Gram Gold Mint Bar 24k (99.9%)
              </h3>
              <motion.button
                className="mt-3 w-full bg-[#8c1d40] text-white text-sm font-medium py-2 rounded-md"
                whileTap={{ scale: 0.95 }}
                whileHover={{ opacity: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Product
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="bg-[#fdf8f6] rounded-lg overflow-hidden flex flex-col shadow-sm"
            variants={gridItemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <img
              alt="A 1 gram gold mint bar"
              className="w-full h-auto object-cover aspect-square"
              src={DGGramGoldMint}
            />
            <div className="p-3 text-center flex flex-col flex-grow">
              <h3 className="text-sm font-medium text-[#1f2937] flex-grow">
                DG 1 Gram Gold Mint Bar 24k (99.9%)
              </h3>
              <motion.button
                className="mt-3 w-full bg-[#8c1d40] text-white text-sm font-medium py-2 rounded-md"
                whileTap={{ scale: 0.95 }}
                whileHover={{ opacity: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Product
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="bg-[#fdf8f6] rounded-lg overflow-hidden flex flex-col shadow-sm"
            variants={gridItemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <img
              alt="A 2 gram gold coin"
              className="w-full h-auto object-cover aspect-square"
              src={DGGramGoldMint}
            />
            <div className="p-3 text-center flex flex-col flex-grow">
              <h3 className="text-sm font-medium text-[#1f2937] flex-grow">
                DG 2 Gram Gold Coin 24k (99.9%)
              </h3>
              <motion.button
                className="mt-3 w-full bg-[#8c1d40] text-white text-sm font-medium py-2 rounded-md"
                whileTap={{ scale: 0.95 }}
                whileHover={{ opacity: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Product
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="bg-[#fdf8f6] rounded-lg overflow-hidden flex flex-col shadow-sm"
            variants={gridItemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <img
              alt="A 2 gram gold coin"
              className="w-full h-auto object-cover aspect-square"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAZydyoMOvJPmD0FkMmAlHyCUhHvqi4YFIdSSomL_UZFPzgt6i45JcmvsWv8lOdAWqgfu3nvczRUwKQ2z82ehsAn79A97boxoVJ3d-2NsytWQ28TViwbipkExU1crab-ADbZZtIOq5xarNvtUcGVw3oV7FyVvmhSS0Rh8KcEaC4h57NL2NNM4Ybgrs6TRSW28c_iOQHtpJINi3zv-QTADM06FQwLATtHSH1uo8hmDhgPn3uiQ2AmZsra-4c5Y7g9XrA7_EJO0aHCw"
            />
            <div className="p-3 text-center flex flex-col flex-grow">
              <h3 className="text-sm font-medium text-[#1f2937] flex-grow">
                DG 2 Gram Gold Coin 24k (99.9%)
              </h3>
              <motion.button
                className="mt-3 w-full bg-[#8c1d40] text-white text-sm font-medium py-2 rounded-md"
                whileTap={{ scale: 0.95 }}
                whileHover={{ opacity: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Product
              </motion.button>
            </div>
          </motion.div>
        </div>
      </ScrollReveal>

      {/* Jewellery Section */}
      <ScrollReveal className="mb-8" delay={0.1}>
        <h2 className="text-xl font-bold mb-4 text-[#1f2937]">Jewellery</h2>
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            className="bg-[#fdf8f6] rounded-lg overflow-hidden flex flex-col shadow-sm"
            variants={gridItemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <img
              alt="A pair of golden earrings"
              className="w-full h-auto object-cover aspect-square"
              src={GoldenEarrings}
            />
            <div className="p-3 text-center flex flex-col flex-grow">
              <h3 className="text-sm font-medium text-[#1f2937]">
                Golden earrings
              </h3>
              <p className="text-xs text-[#6b7280] flex-grow">22k - 8gm</p>
              <motion.button
                className="mt-3 w-full bg-[#8c1d40] text-white text-sm font-medium py-2 rounded-md"
                whileTap={{ scale: 0.95 }}
                whileHover={{ opacity: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Product
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="bg-[#fdf8f6] rounded-lg overflow-hidden flex flex-col shadow-sm"
            variants={gridItemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <img
              alt="A pair of peacock design earrings"
              className="w-full h-auto object-cover aspect-square"
              src={PeacockGoldEarring}
            />
            <div className="p-3 text-center flex flex-col flex-grow">
              <h3 className="text-sm font-medium text-[#1f2937]">
                Peacock Earrings
              </h3>
              <p className="text-xs text-[#6b7280] flex-grow">22k - 7.5gm</p>
              <motion.button
                className="mt-3 w-full bg-[#8c1d40] text-white text-sm font-medium py-2 rounded-md"
                whileTap={{ scale: 0.95 }}
                whileHover={{ opacity: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Product
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="bg-[#fdf8f6] rounded-lg overflow-hidden flex flex-col shadow-sm"
            variants={gridItemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <img
              alt="A golden chain with a silver pendant"
              className="w-full h-auto object-cover aspect-square"
              src={GoldenChain}
            />
            <div className="p-3 text-center flex flex-col flex-grow">
              <h3 className="text-sm font-medium text-[#1f2937]">
                Golden chain
              </h3>
              <p className="text-xs text-[#6b7280] flex-grow">22k - 8gm</p>
              <motion.button
                className="mt-3 w-full bg-[#8c1d40] text-white text-sm font-medium py-2 rounded-md"
                whileTap={{ scale: 0.95 }}
                whileHover={{ opacity: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Product
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="bg-[#fdf8f6] rounded-lg overflow-hidden flex flex-col shadow-sm"
            variants={gridItemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <img
              alt="A golden chain with an emerald pendant"
              className="w-full h-auto object-cover aspect-square"
              src={EmeraldChain}
            />
            <div className="p-3 text-center flex flex-col flex-grow">
              <h3 className="text-sm font-medium text-[#1f2937]">
                Emerald chain
              </h3>
              <p className="text-xs text-[#6b7280] flex-grow">22k - 7.5gm</p>
              <motion.button
                className="mt-3 w-full bg-[#8c1d40] text-white text-sm font-medium py-2 rounded-md"
                whileTap={{ scale: 0.95 }}
                whileHover={{ opacity: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Product
              </motion.button>
            </div>
          </motion.div>
        </div>
      </ScrollReveal>

      {/* Transaction History Section */}
      <ScrollReveal className="mb-8" delay={0.2}>
        <h2 className="text-xl font-bold mb-4 text-[#1f2937]">
          Transaction History
        </h2>
        <div className="space-y-3">
          <motion.div
            className="flex items-center justify-between bg-[#fdf8f6] p-3 rounded-lg shadow-sm"
            variants={gridItemVariants}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98, x: 2 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="material-icons-outlined text-green-600">
                  arrow_downward
                </span>
              </div>
              <div>
                <p className="font-medium text-sm text-[#1f2937]">
                  Purchased Gold Coin
                </p>
                <p className="text-xs text-[#6b7280]">Oct 25, 2023</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-sm text-green-600">+ 1.054 gm</p>
              <p className="text-xs text-[#6b7280]">275 AED</p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-between bg-[#fdf8f6] p-3 rounded-lg shadow-sm"
            variants={gridItemVariants}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98, x: 2 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <span className="material-icons-outlined text-[#8c1d40]">
                  arrow_upward
                </span>
              </div>
              <div>
                <p className="font-medium text-sm text-[#1f2937]">
                  Sold Gold Bar
                </p>
                <p className="text-xs text-[#6b7280]">Oct 23, 2023</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-sm text-[#8c1d40]">- 5.000 gm</p>
              <p className="text-xs text-[#6b7280]">1350 AED</p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-between bg-[#fdf8f6] p-3 rounded-lg shadow-sm"
            variants={gridItemVariants}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98, x: 2 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="material-icons-outlined text-green-600">
                  arrow_downward
                </span>
              </div>
              <div>
                <p className="font-medium text-sm text-[#1f2937]">
                  Purchased Earrings
                </p>
                <p className="text-xs text-[#6b7280]">Oct 21, 2023</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-sm text-green-600">+ 8.000 gm</p>
              <p className="text-xs text-[#6b7280]">2100 AED</p>
            </div>
          </motion.div>
          <div className="text-center mt-4">
            <motion.a
              className="text-[#8c1d40] font-medium text-sm hover:underline"
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              View All
            </motion.a>
          </div>
        </div>
      </ScrollReveal>
    </motion.div>
  );
};
