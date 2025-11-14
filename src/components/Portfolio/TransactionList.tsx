import { transactions } from "@/constants/prices";
import { ChevronDown, Filter, RefreshCw, DollarSign } from "lucide-react";

export const TransactionList = () => (
  <div>
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-bold text-gray-800">Transactions</h2>
        <ChevronDown size={20} className="text-gray-600" />
      </div>
      <Filter size={20} className="text-gray-600" />
    </div>
    <div className="flex flex-col gap-4">
      {transactions.map((tx, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                tx.status === "credit"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              <div className="relative">
                <RefreshCw size={20} />
                <DollarSign
                  size={10}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900">{tx.type}</p>
              <p className="text-xs text-gray-500">{tx.date}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-gray-900">{tx.gm}</p>
            <p className="text-xs text-gray-500">{tx.aed}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
