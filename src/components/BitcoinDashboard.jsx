import React from 'react';
import BitcoinHeader from './BitcoinHeader';
import PriceChart from './PriceChart';
import PerformanceSection from './PerformanceSection';
import FundamentalsSection from './FundamentalSection';
import GetStartedCard from './GetStartedCard';
import TrendingCoins from './TrendingCoins';
import NavigationBar from './NavigationBar';
import SentimentSection from './SentimentSection';
import BitcoinInfo from './BitcoinInfo';
import Tokenomics from './Tokenomics';
import TeamSection from './TeamSection';

const BitcoinDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-3 sm:p-4 md:p-5 lg:px-8 xl:px-16">
      {/* Main Container with max-width and auto margins */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Left Section */}
        <div className="lg:col-span-3 rounded-lg shadow w-full">
          <div className="bg-white p-3 sm:p-4 md:p-6">
            <BitcoinHeader />
            <PriceChart />
          </div>
          <NavigationBar />
          
          {/* Sections with consistent spacing */}
          <div className="bg-white p-3 sm:p-4 md:p-6">
            <PerformanceSection />
            <FundamentalsSection />
          </div>
          
          {/* Additional sections with consistent margins */}
          {[
            <SentimentSection key="sentiment" />,
            <BitcoinInfo key="info" />,
            <Tokenomics key="tokenomics" />,
            <TeamSection key="team" />
          ].map((section, index) => (
            <div key={index} className="bg-white p-3 sm:p-4 md:p-6 mt-4 md:mt-5">
              {section}
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="space-y-4 md:space-y-6 w-full">
          <GetStartedCard />
          <TrendingCoins />
        </div>
      </div>
    </div>
  );
};

export default BitcoinDashboard;