import React, { useState } from 'react';

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  
  const navItems = [
    'Overview',
    'Fundamentals',
    'News Insights',
    'Sentiments',
    'Team',
    'Technicals',
    'Tokenomics'
  ];

  return (
    <nav className="w-full bg-[#EFF2F5] shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-gray-200">
          <ul className="flex flex-nowrap overflow-x-auto">
            {navItems.map((item) => (
              <li key={item} className="flex-none">
                <button
                  onClick={() => setActiveTab(item)}
                  className={`px-4 py-4 text-sm font-medium relative ${
                    activeTab === item
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {item}
                  {activeTab === item && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;