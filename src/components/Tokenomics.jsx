import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const Tokenomics = () => {
  const data = [
    { name: 'Crowdsale investors', value: 80, color: '#2196F3' },
    { name: 'Foundation', value: 20, color: '#FFA000' }
  ];

  return (
    <div className="max-w-5xl mx-4 py-6 ">
      <h1 className="text-2xl font-bold mb-6">Tokenomics</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Initial Distribution</h2>
        
        {/* Chart Container */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Pie Chart */}
          <div className="w-64 h-64 relative">
            <PieChart width={256} height={256}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-3">
            {data.map((entry, index) => (
              <div key={`legend-${index}`} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: entry.color }}
                ></div>
                <span className="text-gray-700">
                  {entry.name}: {entry.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description Text */}
      <p className="text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
};

export default Tokenomics;