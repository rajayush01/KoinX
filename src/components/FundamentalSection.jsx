import React from 'react';

const FundamentalsSection = () => (
  <div className="p-4">
    <div className="flex items-center gap-2 mb-4">
      <h2 className="text-lg font-semibold">Fundamentals</h2>
      <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs">
        i
      </div>
    </div>
    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
      <div className="flex justify-between items-center border-b-2 text-gray-600">
        <span className="text-gray-600 text-sm">Bitcoin Price</span>
        <span className="font-medium text-black text-sm">${(16815.46).toLocaleString()}</span>
      </div>
      
      <div className="flex justify-between items-center border-b-2 text-gray-600">
        <span className="text-gray-600 text-sm">Market Cap</span>
        <span className="font-medium text-black text-sm">${(323507290047).toLocaleString()}</span>
      </div>
      
      <div className="flex justify-between items-center border-b-2 text-gray-600">
        <span className="text-gray-600 text-sm">24h Low / 24h High</span>
        <span className="font-medium text-right text-black text-sm">${(16382.07).toLocaleString()} / ${(16874.12).toLocaleString()}</span>
      </div>
      
      <div className="flex justify-between items-center border-b-2 text-gray-600">
        <span className="text-gray-600 text-sm">Market Cap Dominance</span>
        <span className="font-medium text-black text-sm">38.343%</span>
      </div>
      
      <div className="flex justify-between items-center border-b-2 text-gray-600">
        <span className="text-gray-600 text-sm">7d Low / 7d High</span>
        <span className="font-medium text-right text-black text-sm">${(16382.07).toLocaleString()} / ${(16874.12).toLocaleString()}</span>
      </div>
      
      <div className="flex justify-between items-center border-b-2 text-gray-600">
        <span className="text-gray-600 text-sm">Volume / Market Cap</span>
        <span className="font-medium text-black text-sm">0.0718</span>
      </div>
      
      <div className="flex justify-between items-center border-b-2 text-gray-600">
        <span className="text-gray-600 text-sm">Trading Volume</span>
        <span className="font-medium text-black text-sm">${(23249202782).toLocaleString()}</span>
      </div>
      
      <div className="flex flex-col sm:col-start-2">
        <div className="flex justify-between items-center border-b-2 text-gray-600">
          <span className="text-gray-600 text-sm">All-Time High</span>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <span className="font-medium text-black text-sm">${(69044.77).toLocaleString()}</span>
              <span className="text-red-500 text-sm">-75.6%</span>
            </div>
            <span className="text-xs text-gray-900">Nov 10, 2021 (about 1 year)</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center border-b-2 text-gray-600">
        <span className="text-gray-600 text-sm">Market Cap Rank</span>
        <span className="font-medium text-black text-sm">#1</span>
      </div>
      
      <div className="flex flex-col sm:col-start-2">
        <div className="flex justify-between items-center border-b-2 text-gray-600">
          <span className="text-gray-600 text-sm">All-Time Low</span>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm text-black">${(67.81).toLocaleString()}</span>
              <span className="text-green-500 text-sm">+24729.1%</span>
            </div>
            <span className="text-xs text-gray-900">Jul 06, 2013 (over 9 years)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FundamentalsSection;