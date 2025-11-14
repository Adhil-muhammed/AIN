import { Plus } from "lucide-react";

export const WalletBalanceCard = () => (
  <div
    className="rounded-2xl p-6 text-white flex flex-col gap-4 relative overflow-hidden"
    style={{
      backgroundColor: "#8A1538",
      backgroundImage:
        "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px)",
    }}
  >
    <div className="border border-white/30 rounded-xl p-1 absolute inset-2"></div>
    <div className="z-10">
      <p className="text-sm text-white/80">Your Wallet Balance</p>
      <p className="text-3xl font-semibold mt-1">25400 AED</p>
    </div>
    <div className="z-10 flex items-center gap-4">
      <button className="flex-1 py-2.5 bg-transparent border border-white/80 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors">
        Buy
      </button>
      <button className="flex-1 py-2.5 bg-white text-[#8A1538] rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 hover:bg-gray-100 transition-colors">
        <Plus size={16} strokeWidth={3} />
        Deposit
      </button>
    </div>
  </div>
);
