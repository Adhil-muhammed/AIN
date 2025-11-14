import { TransactionList } from "../components/Portfolio/TransactionList";
import { WalletBalanceCard } from "../components/Portfolio/WalletBalanceCard";

export const PortfolioPage = () => {
  return (
    <div className="p-4 flex flex-col gap-6">
      <header className="py-2">
        <h1 className="text-2xl font-bold tracking-wider">PORTFOLIO</h1>
      </header>
      <WalletBalanceCard />
      <TransactionList />
    </div>
  );
};
