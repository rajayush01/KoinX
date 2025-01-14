import React, { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react"; // Importing Lucide icons

const TrendingCoins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        const topCoins = data.coins.slice(0, 3).map((coin) => {
          const change = coin.item.data?.price_change_percentage_24h?.usd;
          const formattedChange = change ? change.toFixed(2) : null; // Null if no data
          const isPositive = change > 0;

          return {
            name: `${coin.item.name} (${coin.item.symbol.toUpperCase()})`,
            image: coin.item.thumb,
            change: formattedChange,
            isPositive,
          };
        });
        setCoins(topCoins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {coins.map((coin) => (
          <div key={coin.name} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src={coin.image}
                alt={coin.name}
                className="w-6 h-6 rounded-full"
              />
              <p className="text-sm">{coin.name}</p>
            </div>
            <div
              className={`flex items-center gap-1 p-1 rounded-full ${
                coin.isPositive === null
                  ? "text-gray-500 bg-gray-100" // Neutral
                  : coin.isPositive
                  ? "text-green-600 bg-green-100"
                  : "text-red-600 bg-red-100"
              }`}
            >
              {coin.change ? (
                <>
                  {coin.isPositive ? (
                    <ArrowUp size={16} />
                  ) : (
                    <ArrowDown size={16} />
                  )}
                  <p>{coin.change}%</p>
                </>
              ) : (
                <p>N/A</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
