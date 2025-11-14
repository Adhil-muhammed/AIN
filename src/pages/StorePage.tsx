import { useState } from "react";
import { Heart, ShoppingCart, Search } from "lucide-react";
import { bestsellers, products } from "../constants/prices";

export const StorePage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Gold Bars", "Coins", "Jewelry", "Gifts"];

  return (
    <div className="pb-28">
      <header className="p-4 flex justify-between items-center bg-white">
        <h1 className="text-3xl font-bold text-slate-900">Store</h1>
        <div className="flex items-center space-x-4">
          <button className="text-slate-900">
            <Heart className="text-3xl" size={30} />
          </button>
          <button className="text-slate-900">
            <ShoppingCart className="text-3xl" size={30} />
          </button>
        </div>
      </header>
      <main className="px-4">
        <div className="relative mb-6">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            className="w-full pl-10 pr-4 py-3 bg-gray-100 border-gray-200 rounded-lg text-slate-900 placeholder-gray-400 focus:ring-[#8A1538] focus:border-[#8A1538]"
            placeholder="Search"
            type="text"
          />
        </div>
        <div className="mb-6">
          <div className="flex space-x-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-[#8A1538] text-white"
                    : "bg-gray-100 text-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-slate-900">Bestsellers</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {bestsellers.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-36 bg-gray-100 rounded-lg p-3"
              >
                <img
                  alt={item.title}
                  className="w-full h-24 object-cover rounded mb-2"
                  src={item.img}
                />
                <h3 className="text-sm font-medium text-slate-800 truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">{item.details}</p>
                <p className="text-sm font-bold text-amber-500 mt-1">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </section>
        <div className="grid grid-cols-2 gap-4">
          {products.map((item) => (
            <div key={item.id} className="bg-gray-100 rounded-lg p-3">
              <div className="bg-white rounded-lg mb-3">
                <img
                  alt={item.title}
                  className="w-full h-32 object-cover rounded-lg"
                  src={item.img}
                />
              </div>
              <h3 className="font-medium text-slate-800">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.details}</p>
              <p className="font-bold text-amber-500 mt-1">{item.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
