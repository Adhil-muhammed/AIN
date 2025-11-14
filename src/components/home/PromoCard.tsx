import React from "react";
import { AutoSlider } from "./AutoSlider";
import promoCardIcon from "@/assets/svg/promo-card-icon.svg";

// Promo card item component
const PromoCardItem: React.FC<{
  title: string;
  description: string;
  gradient: string;
}> = ({ title, description, gradient }) => (
  <div
    className="rounded-2xl p-6 text-white flex items-center justify-between overflow-hidden"
    style={{
      background: gradient,
    }}
  >
    <div className="flex items-center justify-between w-full">
      <div className="z-10">
        <h2 className="text-[23px] font-semibold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
      <img src={promoCardIcon} alt="promoCardIcon" className="ml-4" />
    </div>
  </div>
);

// Daily Rewards Card component
const DailyRewardsCard: React.FC = () => {
  const lightImageUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD0abUHsa8C7FmzBybjgrJMzsX0jog5oKqZ6Ydaa8QMbD0h1v103Tq9D54mkMQA7MoYGta0VnuSOKlv3EOGZuC8IJ-eEFb-QOeqBXQO16gKVrYE_5qZ6KJdJ2TS_7gObxZhBPDBEMDXFS7YCMAilZSNsI3JQ82oPOXGUlZJFwBE7Vy-1cpTwHo36AgD2XoRW3bTLFFy34vPIjrl8V1_I2S063fJW2zCfI7Qyt_YKIxS-mwjbNbR6eYtFU8rkXcY9hpcU_MSRvCAtSc";
  const darkImageUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDhdfuQfqSly3s6F3lu4V_easzx8Q8vfEl4HWh9Pf5Lt0pMGWLWDP1lnemR1tWDavAKdcYLDvYxbF5CMJmHoqAuSFtwWXPb9Ein4XUDeH6FlTAiG_98j_YGqDgG7zyPzthKpXT0E2wDZ6SyYyhcYgSIfW0xcyhLePTKFoDis4vGxsYZyLt8j-tf_P7v90cvyiXrLuFZYV4Jgeexm7e6-IFFN4AV5bBGvzu3R4Gtfg8WsoZNrMyn_sXwmu3Q3_KQ5vkonsE-EK-XpDg";

  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-lg p-6 h-48 w-full flex items-center justify-between"
      style={{
        background: "linear-gradient(to bottom right, #3b82f6, #9333ea)",
      }}
    >
      {/* Text Content */}
      <div className="z-10 w-3/5 relative flex-shrink-0">
        <h2
          className="text-2xl font-bold leading-tight"
          style={{ color: "#FFFFFF", margin: 0 }}
        >
          Daily Rewards
        </h2>
        <p
          className="mt-2 text-sm"
          style={{ color: "rgba(255, 255, 255, 0.9)", margin: 0 }}
        >
          Log in daily to claim your bonus gold!
        </p>
      </div>

      {/* Gift Box Image */}
      <div className="absolute -right-8 -top-8 w-48 h-48 z-0 pointer-events-none">
        <img
          alt="Illustration of a vibrant gift box with ribbons"
          className="w-full h-full object-contain drop-shadow-lg transform -rotate-12 hidden dark:block"
          src={darkImageUrl}
        />
        <img
          alt="Illustration of a vibrant gift box with ribbons"
          className="w-full h-full object-contain drop-shadow-lg transform -rotate-12 block dark:hidden"
          src={lightImageUrl}
        />
      </div>
    </div>
  );
};

export const PromoCard = () => {
  // Define your promo items here
  const promoItems = [
    {
      title: "Refer and Earn",
      description:
        "Refer a friend and Earn XP points worth of 20 AED for each referral",
      gradient: "linear-gradient(95.59deg, #801433 -28.77%, #E6B18A 94.56%)",
    },
    {
      title: "Special Offer",
      description:
        "Get 10% off on your first gold purchase. Limited time only!",
      gradient: "linear-gradient(95.59deg, #1a4d2e -28.77%, #4ade80 94.56%)",
    },
    {
      title: "New Collection",
      description:
        "Explore our latest jewelry collection with exclusive designs",
      gradient: "linear-gradient(95.59deg, #1e3a8a -28.77%, #60a5fa 94.56%)",
    },
  ];

  const sliderItems: React.ReactNode[] = [
    <DailyRewardsCard key="daily-rewards" />,
    ...promoItems.map((item, index) => (
      <PromoCardItem
        key={index}
        title={item.title}
        description={item.description}
        gradient={item.gradient}
      />
    )),
  ];

  return (
    <AutoSlider items={sliderItems} autoSlideInterval={4000} showDots={true} />
  );
};
