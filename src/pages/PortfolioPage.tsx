import React, { useState } from "react";
import { Bell, PlusCircle, ChevronDown, Filter, RefreshCw } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const PortfolioPage = () => {
  return (
    <div className="font-sans bg-white">
      <div className="mx-auto max-w-sm h-screen flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto px-6 pb-24">
          <WalletCard />
          <PerformanceChart />
          <Transactions />
        </main>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wider text-gray-900">
          PORTFOLIO
        </h1>
        <div className="relative">
          <button className="text-gray-600 hover:text-gray-900 transition-colors">
            <Bell size={24} />
          </button>
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-[#8A1538] ring-2 ring-white"></span>
        </div>
      </div>
    </header>
  );
};

const WalletCard = () => {
  const walletCardBgStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  };

  return (
    <div
      style={walletCardBgStyle}
      className="bg-[#8A1538] rounded-2xl p-6 text-white shadow-lg"
    >
      <p className="text-sm font-medium opacity-80">Your Wallet Balance</p>
      <p className="text-4xl font-bold mt-2 mb-6">
        25,400 <span className="text-2xl font-semibold opacity-80">AED</span>
      </p>
      <div className="grid grid-cols-2 gap-4">
        <button className="w-full py-3 text-center border border-white/50 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors">
          Buy
        </button>
        <button className="w-full py-3 flex items-center justify-center gap-2 text-[#8A1538] bg-white rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
          <PlusCircle size={20} strokeWidth={2.5} />
          Deposit
        </button>
      </div>
    </div>
  );
};

const PerformanceChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<
    "1D" | "1W" | "1M" | "All"
  >("1W");

  // Sample data for different time periods
  const chartData = {
    "1D": {
      labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
      values: [25000, 25200, 24800, 25400, 25100, 25300, 25400],
    },
    "1W": {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      values: [24000, 24500, 24200, 24800, 25000, 25200, 25400],
    },
    "1M": {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      values: [23000, 24000, 24500, 25400],
    },
    All: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      values: [20000, 22000, 23500, 24000, 24500, 25400],
    },
  };

  const currentData = chartData[selectedPeriod];

  const data = {
    labels: currentData.labels,
    datasets: [
      {
        label: "Portfolio Value",
        data: currentData.values,
        borderColor: "#8A1538",
        backgroundColor: "rgba(138, 21, 56, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#8A1538",
        pointHoverBorderColor: "#FFFFFF",
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
        titleFont: {
          size: 12,
          weight: "bold" as const,
        },
        bodyFont: {
          size: 14,
          weight: "bold" as const,
        },
        callbacks: {
          label: function (context: any) {
            return `AED ${context.parsed.y.toLocaleString()}`;
          },
        },
        displayColors: false,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 11,
            family: "Poppins",
          },
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index" as const,
    },
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Performance</h2>
        <div className="flex items-center gap-2 rounded-full bg-gray-100 p-1">
          <button
            onClick={() => setSelectedPeriod("1D")}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
              selectedPeriod === "1D"
                ? "text-white bg-[#8A1538]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            1D
          </button>
          <button
            onClick={() => setSelectedPeriod("1W")}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
              selectedPeriod === "1W"
                ? "text-white bg-[#8A1538]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            1W
          </button>
          <button
            onClick={() => setSelectedPeriod("1M")}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
              selectedPeriod === "1M"
                ? "text-white bg-[#8A1538]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            1M
          </button>
          <button
            onClick={() => setSelectedPeriod("All")}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
              selectedPeriod === "All"
                ? "text-white bg-[#8A1538]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            All
          </button>
        </div>
      </div>
      <div className="h-48 relative">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

interface TransactionItemProps {
  type: string;
  date: string;
  amount: string;
  value: string;
  status: string;
}

const Transactions = () => {
  const transactionData: TransactionItemProps[] = [
    {
      type: "Purchased",
      date: "01 Nov - 5:58 PM",
      amount: "+10 gm",
      value: "-4800 AED",
      status: "success",
    },
    {
      type: "Sold",
      date: "01 Nov - 5:58 PM",
      amount: "+10 gm",
      value: "-4800 AED",
      status: "danger",
    },
    {
      type: "Purchased",
      date: "01 Nov - 5:58 PM",
      amount: "+10 gm",
      value: "-4800 AED",
      status: "success",
    },
    {
      type: "Sold",
      date: "01 Nov - 5:58 PM",
      amount: "+10 gm",
      value: "-4800 AED",
      status: "danger",
    },
  ];
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <h2 className="text-xl font-bold text-gray-900">Transactions</h2>
          <ChevronDown size={20} className="text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Filter size={20} className="text-gray-600" />
        </button>
      </div>
      <div className="space-y-4">
        {transactionData.map((transaction, index) => (
          <TransactionItem key={index} {...transaction} />
        ))}
      </div>
    </div>
  );
};

const TransactionItem: React.FC<TransactionItemProps> = ({
  type,
  date,
  amount,
  value,
  status,
}) => {
  const isSuccess = status === "success";
  const iconWrapperClass = isSuccess ? "bg-green-100" : "bg-red-100";
  const iconClass = isSuccess ? "text-green-600" : "text-red-600";
  const amountClass = isSuccess ? "text-green-600" : "text-red-600";

  return (
    <div className="flex items-center">
      <div
        className={`w-12 h-12 rounded-full ${iconWrapperClass} flex items-center justify-center mr-4`}
      >
        <RefreshCw size={20} className={iconClass} />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-gray-900">{type}</p>
        <p className="text-sm text-gray-600">{date}</p>
      </div>
      <div className="text-right">
        <p className={`font-semibold ${amountClass}`}>{amount}</p>
        <p className="text-sm text-gray-600">{value}</p>
      </div>
    </div>
  );
};
