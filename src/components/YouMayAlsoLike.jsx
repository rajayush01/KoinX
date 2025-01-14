import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const YouMayAlsoLike = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingResponse = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const trendingData = await trendingResponse.json();

        const formattedTrendingCoins = trendingData.coins.map(({ item }) => ({
          id: item.id,
          name: item.name,
          symbol: item.symbol.toUpperCase(),
          thumb: item.thumb,
          market_cap: item.market_cap_rank ? `#${item.market_cap_rank}` : "N/A",
          price: item.data?.price || 0,
          price_display: item.data?.price
            ? `$${item.data?.price.toFixed(4)}`
            : "N/A",
          price_change_percentage_24h: {
            usd: item.data?.price_change_percentage_24h?.usd || 0,
          },
          sparkline: `https://www.coingecko.com/coins/${item.coin_id}/sparkline.svg`,
        }));

        const sortedTrendingCoins = formattedTrendingCoins.sort(
          (a, b) => b.price - a.price
        );

        setTrendingCoins(sortedTrendingCoins);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const scrollCarousel = (direction, elementId) => {
    const container = document.getElementById(elementId);
    if (container) {
      const baseScrollAmount = window.innerWidth < 768 ? 280 : 320;
      const scrollAmount = direction === "left" ? -baseScrollAmount : baseScrollAmount;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const CarouselSection = ({ title, id }) => (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 px-4 md:px-0">{title}</h2>
      <div className="relative">
        <button
          onClick={() => scrollCarousel("left", id)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 w-6 h-6 md:w-8 md:h-8 rounded-full shadow-lg hover:bg-gray-100 flex items-center justify-center"
          style={{ left: "-8px" }}
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
        </button>

        <div
          id={id}
          className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar relative scroll-smooth px-4 md:px-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {trendingCoins.map((coin) => (
            <div
              key={coin.id}
              className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] max-h-[250px] flex-shrink-0 bg-white rounded-xl shadow-md p-3 md:p-4 border border-gray-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <img
                  src={coin.thumb}
                  alt={coin.symbol}
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full"
                />
                <div className="flex flex-row items-center justify-between w-full gap-2">
                  <div>
                    <div className="font-medium text-xs md:text-sm">
                      {coin.name}
                    </div>
                    <div className="text-gray-500 text-xs">{coin.symbol}</div>
                  </div>
                  <span
                    className={`rounded-lg flex items-center h-5 p-1 px-2 text-xs md:text-sm ${
                      coin.price_change_percentage_24h.usd >= 0
                        ? "text-green-500 bg-green-100"
                        : "text-red-500 bg-red-100"
                    }`}
                  >
                    {coin.price_change_percentage_24h.usd.toFixed(2)}%
                  </span>
                </div>
              </div>
              <div className="text-base md:text-lg font-bold mb-1">
                {coin.price_display}
              </div>

              <div className="text-xs md:text-sm text-gray-500 mb-3">
                Market Cap Rank: {coin.market_cap}
              </div>
              <img
                src={coin.sparkline}
                alt={`${coin.name} price graph`}
                className={`w-full h-12 md:h-16 ${
                  coin.price_change_percentage_24h.usd >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollCarousel("right", id)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 w-6 h-6 md:w-8 md:h-8 rounded-full shadow-lg hover:bg-gray-100 flex items-center justify-center"
          style={{ right: "-8px" }}
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
        </button>
      </div>
    </div>
  );

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="bg-white mt-5">
      <div className="max-w-[1300px] mx-auto px-0 md:px-8 lg:px-12">
        <CarouselSection title="You May Also Like" id="carousel-1" />
        <CarouselSection title="Trending Coins" id="carousel-2" />
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
