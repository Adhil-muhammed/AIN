import promoCardIcon from "@/assets/svg/promo-card-icon.svg";

export const PromoCard = () => (
  <div
    className="rounded-2xl p-6 text-white flex items-center justify-between overflow-hidden"
    style={{
      background: "linear-gradient(95.59deg, #801433 -28.77%, #E6B18A 94.56%)",
    }}
  >
    <div className="flex items-center justify-between ">
      <div className="z-10">
        <h2 className="text-[23px] font-semibold mb-2">Refer and Earn</h2>
        <p className="text-sm">
          a friend and Earn XP points worth of 20 AED for each referral
        </p>
      </div>
      <img src={promoCardIcon} alt="promoCardIcon" />
    </div>
  </div>
);
