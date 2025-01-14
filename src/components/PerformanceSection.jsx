import React from 'react';

const PerformanceBar = ({ low, high, current }) => {
  const range = high - low;
  const position = ((current - low) / range) * 100;
  
  return (
    <div className="relative w-full h-2">
      <div className="w-full h-full rounded-full overflow-hidden">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
        </div>
      </div>
      <div 
        className="absolute top-1/2 -translate-y-1/2 transform mt-2"
        style={{ left: `${position}%` }}
      >
        <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-black -mt-1" />
      </div>
    </div>
  );
};

const PerformanceSection = () => (
  <div className="p-6">
    <h2 className="text-xl font-semibold mb-6">Performance</h2>
    <div className="space-y-6">
      <div>
        <div className="flex justify-between mb-2">
          <div>
            <p className="text-sm text-gray-500">Today's Low</p>
            <p className="font-medium">46,930.22</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Today's High</p>
            <p className="font-medium">49,343.83</p>
          </div>
        </div>
        <PerformanceBar low={46930.22} high={49343.83} current={48637.83} />
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <div>
            <p className="text-sm text-gray-500">52W Low</p>
            <p className="font-medium">16,930.22</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">52W High</p>
            <p className="font-medium">49,743.83</p>
          </div>
        </div>
        <PerformanceBar low={16930.22} high={49743.83} current={48637.83} />
      </div>
    </div>
  </div>
);

export default PerformanceSection;