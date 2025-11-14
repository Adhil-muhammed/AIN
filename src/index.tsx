import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Store, Tag, User, ChevronDown, Filter, Plus, RefreshCw, DollarSign } from 'lucide-react';

const GOLD_PRICE_PER_GRAM = 439.25;

export const App = () => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="w-full max-w-sm mx-auto p-4 flex flex-col gap-6 pb-28">
      <Header activeTab={activeTab} />
      
      {activeTab === 'Home' && <HomePage />}
      {activeTab === 'Portfolio' && <PortfolioPage />}
      
      <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

const HomePage = () => {
  const [activeToggle, setActiveToggle] = useState('buy');
  const [gram, setGram] = useState('10');
  const [aed, setAed] = useState((10 * GOLD_PRICE_PER_GRAM).toFixed(2));

  const handleGramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setGram(value);
    if (value === '' || isNaN(parseFloat(value)) || parseFloat(value) < 0) {
      setAed('');
    } else {
      setAed((parseFloat(value) * GOLD_PRICE_PER_GRAM).toFixed(2));
    }
  };

  const handleAedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAed(value);
    if (value === '' || isNaN(parseFloat(value)) || parseFloat(value) < 0) {
      setGram('');
    } else {
      setGram((parseFloat(value) / GOLD_PRICE_PER_GRAM).toFixed(4));
    }
  }

  return (
    <>
      <PromoCard />
      <PaginationDots />
      <PriceCards />
      <TransactionSection activeToggle={activeToggle} setActiveToggle={setActiveToggle} />
      <ConverterCard 
        gram={gram}
        aed={aed}
        onGramChange={handleGramChange}
        onAedChange={handleAedChange}
      />
      <button className="w-full py-4 bg-[#8A1538] text-white border-none rounded-xl text-lg font-semibold cursor-pointer mt-4 hover:bg-[#8A1538]/90 transition-colors">
        {activeToggle === 'buy' ? 'Buy' : 'Sell'}
      </button>
    </>
  );
};

const PortfolioPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <WalletBalanceCard />
      <TransactionList />
    </div>
  );
};

const WalletBalanceCard = () => (
  <div 
    className="rounded-2xl p-6 text-white flex flex-col gap-4 relative overflow-hidden"
    style={{
      backgroundColor: '#8A1538',
      backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px)'
    }}
  >
    <div className="border border-white/30 rounded-xl p-1 absolute inset-2"></div>
    <div className="z-10">
      <p className="text-sm text-white/80">Your Wallet Balance</p>
      <p className="text-3xl font-semibold mt-1">25400 AED</p>
    </div>
    <div className="z-10 flex items-center gap-4">
      <button className="flex-1 py-2.5 bg-transparent border border-white/80 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors">Buy</button>
      <button className="flex-1 py-2.5 bg-white text-[#8A1538] rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 hover:bg-gray-100 transition-colors">
        <Plus size={16} strokeWidth={3} />
        Deposit
      </button>
    </div>
  </div>
);

const transactions = [
    { type: 'Purchased', date: '01 nov - 5:58 pm', gm: '+10 gm', aed: '-4800 AED', status: 'credit' },
    { type: 'Sold', date: '01 nov - 5:58 pm', gm: '+10 gm', aed: '-4800 AED', status: 'debit' },
    { type: 'Purchased', date: '01 nov - 5:58 pm', gm: '+10 gm', aed: '-4800 AED', status: 'credit' },
    { type: 'Sold', date: '01 nov - 5:58 pm', gm: '+10 gm', aed: '-4800 AED', status: 'debit' },
];

const TransactionList = () => (
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
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.status === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                            <div className="relative">
                                <RefreshCw size={20}/>
                                <DollarSign size={10} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
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


const Header = ({ activeTab }: { activeTab: string }) => {
  if (activeTab === 'Portfolio') {
    return (
      <header className="py-2">
        <h1 className="text-2xl font-bold tracking-wider">PORTFOLIO</h1>
      </header>
    );
  }

  return (
    <header className="flex justify-between items-center py-2">
      <div className="flex items-end">
        <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.536 0L23.072 15L11.536 30H0L11.536 15L0 0H11.536Z" fill="#F1B93B"/>
          <path d="M23.072 15L11.536 0H21.536L33.072 15L21.536 30H11.536L23.072 15Z" fill="#F8D479"/>
        </svg>
        <div className="flex flex-col ml-2 leading-none">
          <span className="text-2xl font-bold tracking-[2px]">AIN</span>
          <span className="text-[8px] text-gray-400 tracking-[0.5px]">GOLD & DIAMONDS</span>
        </div>
      </div>
      <div className="flex flex-col justify-between w-6 h-[18px] cursor-pointer space-y-1">
        <span className="block h-[3px] w-full bg-black rounded-sm"></span>
        <span className="block h-[3px] w-full bg-black rounded-sm"></span>
        <span className="block h-[3px] w-full bg-black rounded-sm"></span>
      </div>
    </header>
  );
};

const PromoCard = () => (
    <div className="bg-gradient-to-r from-[#B46556] to-[#D58D6D] rounded-2xl p-6 text-white flex items-center justify-between overflow-hidden">
        <div className="z-10">
            <h2 className="text-2xl font-semibold mb-2">Refer and Earn</h2>
            <p className="text-sm max-w-[180px] leading-snug">Refer a friend and Earn XP points worth of 20 AED for each referral</p>
        </div>
        <div className="relative w-28 h-28 -mr-10">
            <img src="https://i.imgur.com/8qkX6n6.png" alt="Phone with coins" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] max-w-none"/>
        </div>
    </div>
);

const PaginationDots = () => (
    <div className="flex justify-center items-center gap-2 -mt-4">
        <div className="w-2.5 h-2.5 rounded-full bg-[#F1B93B]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
    </div>
);

const PriceCards = () => (
  <div className="grid grid-cols-2 gap-4">
    <div className="bg-[#F1B93B] text-black rounded-xl p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium">Gold/gm</h3>
        <div className="w-5 h-5 rounded-full bg-black/10 flex justify-center items-center font-bold cursor-pointer">+</div>
      </div>
      <p className="text-xl font-bold mb-1">439.25 AED</p>
      <div className="flex items-center text-sm font-medium text-red-600">
        <span>-0.07%</span>
        <span className="ml-1">▼</span>
      </div>
    </div>
    <div className="bg-gray-100 text-gray-800 rounded-xl p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium">Silver/gm</h3>
        <div className="w-5 h-5 rounded-full bg-black/10 flex justify-center items-center font-bold cursor-pointer">+</div>
      </div>
      <p className="text-xl font-bold mb-1">5.20 AED</p>
      <div className="flex items-center text-sm font-medium text-green-600">
        <span>-0.07%</span>
        <span className="ml-1">▲</span>
      </div>
    </div>
  </div>
);

type TransactionSectionProps = {
  activeToggle: string;
  setActiveToggle: React.Dispatch<React.SetStateAction<string>>;
};

const TransactionSection = ({ activeToggle, setActiveToggle }: TransactionSectionProps) => (
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F1B93B] flex justify-center items-center text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            </div>
            <div>
                <h4 className="text-sm font-semibold tracking-wide text-gray-800">BUYING PRICE</h4>
                <p className="text-base font-bold">24K</p>
            </div>
        </div>
        <div className="flex bg-gray-100 rounded-full p-1">
            <button 
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${activeToggle === 'buy' ? 'bg-[#8A1538] text-white' : 'text-gray-500'}`}
              onClick={() => setActiveToggle('buy')}
            >
              Buy
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${activeToggle === 'sell' ? 'bg-[#8A1538] text-white' : 'text-gray-500'}`}
              onClick={() => setActiveToggle('sell')}
            >
              Sell
            </button>
        </div>
    </div>
);

type ConverterCardProps = {
    gram: string;
    aed: string;
    onGramChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAedChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ConverterCard = ({ gram, aed, onGramChange, onAedChange }: ConverterCardProps) => (
    <div className="bg-gray-50 rounded-xl p-5 flex justify-between items-center">
        <div className="flex flex-col">
            <label htmlFor="gram" className="text-xs text-gray-500 mb-2">GRAM</label>
            <input id="gram" type="number" value={gram} onChange={onGramChange} placeholder="10 gm" className="border-none border-b-2 border-gray-200 bg-transparent text-base pb-1 w-28 font-medium text-gray-800 focus:outline-none focus:ring-0 focus:border-[#F1B93B]"/>
        </div>
        <div className="text-2xl text-gray-600 cursor-pointer mt-5">
            &#8644;
        </div>
        <div className="flex flex-col">
            <label htmlFor="aed" className="text-xs text-gray-500 mb-2">AED</label>
            <input id="aed" type="number" value={aed} onChange={onAedChange} placeholder="4000 AED" className="border-none border-b-2 border-gray-200 bg-transparent text-base pb-1 w-28 font-medium text-gray-800 focus:outline-none focus:ring-0 focus:border-[#F1B93B]"/>
        </div>
    </div>
);

const navItems = [
  { name: 'Home', icon: Home },
  { name: 'Portfolio', icon: Briefcase },
  { name: 'Store', icon: Store },
  { name: 'My Plans', icon: Tag },
  { name: 'Profile', icon: User },
];

type BottomNavBarProps = {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const BottomNavBar = ({ activeTab, setActiveTab }: BottomNavBarProps) => {
    return (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm mx-auto bg-gradient-to-r from-[#8A1538] to-[#B46556] rounded-full p-2 shadow-lg">
            <div className="flex justify-around items-center">
       
         {navItems.map((item) => (
                    <motion.button
                        key={item.name}
                        onClick={() => setActiveTab(item.name)}
                        className={`flex flex-col items-center justify-center gap-1 text-white transition-opacity w-16 h-12 rounded-full`}
                        whileTap={{ scale: 0.9 }}
                    >
                        <item.icon size={22} className={`${activeTab === item.name ? 'opacity-100' : 'opacity-80'}`} />
                        <span className={`text-xs ${activeTab === item.name ? 'opacity-100 font-semibold' : 'opacity-80 font-medium'}`}>{item.name}</span>
                    </motion.button>
                ))}
            </div>
        </nav>
    );
};