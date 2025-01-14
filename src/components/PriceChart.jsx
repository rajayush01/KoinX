import React, { useEffect, useState } from "react";

const PriceChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("7D");

  useEffect(() => {
    // Load TradingView widget with updated settings
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => {
      new window.TradingView.widget({
        container_id: "tradingview_btc_chart",
        autosize: true,
        symbol: "BINANCE:BTCUSDT",
        interval: "60",
        timezone: "Etc/UTC",
        theme: "light",
        style: "3", // Line chart style
        locale: "en",
        hide_top_toolbar: true, // Hide top toolbar
        hide_legend: true, // Hide legend
        hide_side_toolbar: true, // Remove side toolbar
        allow_symbol_change: false, // Disable symbol changes
        withdateranges: false, // Remove date range options
        backgroundColor: "#ffffff", // Set background color
        gridLineColor: "transparent", // Hide grid lines
        studies: [],
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script
    };
  }, [selectedPeriod]);

  const periods = ["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"];

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <h2 className="text-base font-semibold mb-4">
          Bitcoin Price Chart (USD)
        </h2>

        <div className="flex justify-between mb-4">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-1 py-2 text-xs sm:text-sm sm:px-4 font-semibold rounded-full hover:bg-[#E2ECFE] 
                            ${
                              selectedPeriod === period
                                ? "bg-[#E2ECFE] text-blue-700"
                                : "text-gray-500"
                            }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div id="tradingview_btc_chart" className="w-full h-64"></div>
    </div>
  );
};

export default PriceChart;
