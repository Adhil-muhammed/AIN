import { NavLink, useLocation } from "react-router-dom";
import { Home, Briefcase, Store, Tag, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const BottomNavBar = () => {
  const location = useLocation();
  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Portfolio", icon: Briefcase, path: "/portfolio" },
    { name: "Store", icon: Store, path: "/store" },
    { name: "My Plans", icon: Tag, path: "/plans" },
    { name: "Profile", icon: User, path: "/profile" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="fixed bottom-0 left-0 right-0 w-full max-w-sm mx-auto px-2 pb-2 pt-1.5 z-50"
    >
      <motion.div
        initial={false}
        className="bg-gradient-to-t from-[#8A1538]/98 to-[#8A1538]/95 backdrop-blur-xl rounded-2xl flex justify-around items-center h-14 shadow-2xl border border-white/10 relative overflow-hidden"
      >
        {/* Animated background glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Active indicator background */}
        <AnimatePresence>
          {navItems.map((item, index) => {
            if (isActive(item.path)) {
              return (
                <motion.div
                  key={`indicator-${item.name}`}
                  layoutId="activeIndicator"
                  initial={false}
                  className="absolute top-0 bottom-0 rounded-xl bg-white/20 backdrop-blur-sm"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                  style={{
                    width: `${100 / navItems.length}%`,
                    left: `${(index * 100) / navItems.length}%`,
                  }}
                />
              );
            }
            return null;
          })}
        </AnimatePresence>

        {navItems.map((item, index) => {
          const Icon = item.icon;

          if (item.name === "Store") {
            return (
              <NavLink key={item.name} to={item.path} className="relative z-10">
                {({ isActive: navActive }) => (
                  <motion.div
                    className="flex flex-col items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={false}
                    animate={{
                      y: navActive ? -2 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                  >
                    <motion.div
                      className="bg-white rounded-full p-1.5 mb-0.5 shadow-lg relative z-10"
                      animate={{
                        scale: navActive ? 1.1 : 1,
                        boxShadow: navActive
                          ? "0 6px 20px rgba(255, 255, 255, 0.4)"
                          : "0 3px 10px rgba(0, 0, 0, 0.2)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <motion.div
                        animate={{
                          rotate: navActive ? [0, -10, 10, -10, 0] : 0,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon className="text-[#8A1538]" size={18} />
                      </motion.div>
                    </motion.div>
                    <motion.span
                      className="text-[10px] font-semibold leading-tight"
                      animate={{
                        opacity: navActive ? 1 : 0,
                        y: navActive ? 0 : -2,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      {item.name}
                    </motion.span>
                  </motion.div>
                )}
              </NavLink>
            );
          }

          return (
            <NavLink key={item.name} to={item.path} className="relative z-10">
              {({ isActive: navActive }) => (
                <motion.div
                  className="flex flex-col items-center justify-center cursor-pointer relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={false}
                  animate={{
                    y: navActive ? -4 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                >
                  <motion.div
                    animate={{
                      scale: navActive ? 1.15 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                  >
                    <Icon
                      size={20}
                      className={navActive ? "text-white" : "text-white/70"}
                    />
                  </motion.div>
                  <motion.span
                    className={`text-[10px] mt-0.5 font-medium leading-tight ${
                      navActive ? "text-white" : "text-white/60"
                    }`}
                    animate={{
                      opacity: navActive ? 1 : 0.6,
                      scale: navActive ? 1.05 : 1,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {item.name}
                  </motion.span>
                  {navActive && (
                    <motion.div
                      className="absolute -bottom-0.5 left-1/2 w-0.5 h-0.5 bg-white rounded-full"
                      initial={{ scale: 0, x: "-50%" }}
                      animate={{ scale: 1, x: "-50%" }}
                      exit={{ scale: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          );
        })}
      </motion.div>
    </motion.nav>
  );
};
