import { Home, Briefcase, Store, Tag, User } from "lucide-react";

export const BottomNavBar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { name: "Home", icon: Home },
    { name: "Portfolio", icon: Briefcase },
    { name: "Store", icon: Store },
    { name: "My Plans", icon: Tag },
    { name: "Profile", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full max-w-sm mx-auto p-3">
      <div className="bg-[#8A1538]/95 backdrop-blur-sm rounded-full flex justify-around items-center h-16 shadow-lg">
        {navItems.map((item) => {
          const isActive = activeTab === item.name;
          // Special style for the middle 'Store' button
          if (item.name === "Store") {
            return (
              <a
                key={item.name}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.name);
                }}
                className={`flex flex-col items-center text-white transition-transform transform ${
                  isActive ? "scale-110 -translate-y-1" : ""
                }`}
              >
                <div className="bg-white rounded-full p-2 mb-1 shadow-md">
                  <item.icon className="text-[#8A1538]" size={22} />
                </div>
                <span
                  className={`text-xs mt-1 font-semibold ${
                    isActive ? "text-white" : "text-transparent"
                  }`}
                >
                  {item.name}
                </span>
              </a>
            );
          }
          // Default style for other buttons
          return (
            <a
              key={item.name}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(item.name);
              }}
              className={`flex flex-col items-center transition-colors ${
                isActive ? "text-white" : "text-white/70"
              } hover:text-white`}
            >
              <item.icon size={24} />
              <span className="text-xs mt-1">{item.name}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
