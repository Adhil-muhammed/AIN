export const PromoCard = () => (
  <div className="bg-gradient-to-r from-[#B46556] to-[#D58D6D] rounded-2xl p-6 text-white flex items-center justify-between overflow-hidden">
    <div className="z-10">
      <h2 className="text-2xl font-semibold mb-2">Refer and Earn</h2>
      <p className="text-sm max-w-[180px] leading-snug">
        Refer a friend and Earn XP points worth of 20 AED for each referral
      </p>
    </div>
    <div className="relative w-28 h-28 -mr-10">
      <img
        src="https://i.imgur.com/8qkX6n6.png"
        alt="Phone with coins"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] max-w-none"
      />
    </div>
  </div>
);
