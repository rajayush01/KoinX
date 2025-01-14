import React from 'react';
import { ArrowRight } from 'lucide-react';
import profit from "../assets/profit.png";
import liability from "../assets/liability.png";

const BitcoinInfo = () => {
    const bitcoinData = {
        price: 16951.82,
        volume: 19.14,
        change24h: 0.36,
        change7dHigh: -7.70,
        change7dLow: 3.40,
        circulatingSupply: 19.24,
        maxSupply: 21
    };

    return (
        <div className="max-w-4xl mx-4 py-6 space-y-8">
            {/* Header Section */}
            <section>
                <h1 className="text-2xl font-bold mb-4">About Bitcoin</h1>

                <h2 className="text-xl font-bold mb-3">What is Bitcoin?</h2>
                <p className="text-gray-700 mb-4">
                    Bitcoin's price today is US${bitcoinData.price.toLocaleString()}, with a 24-hour trading volume of ${bitcoinData.volume} B. BTC is +{bitcoinData.change24h}% in the last 24 hours. It is currently {bitcoinData.change7dHigh}% from its 7-day all-time high of $18,366.66, and {bitcoinData.change7dLow}% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of {bitcoinData.circulatingSupply} M BTC and a max supply of {bitcoinData.maxSupply} M BTC.
                </p>
            </section>

            {/* Lorem Ipsum Section */}
            <section>
                <h2 className="text-xl font-bold mb-3">Lorem ipsum dolor sit amet</h2>
                <div className="space-y-4 text-gray-700">
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
                    </p>
                    <p>
                        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui.
                    </p>
                    <p>
                        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus.
                    </p>
                </div>
            </section>

            {/* Cards Section */}
            <section>
                <h2 className="text-xl font-bold mb-4">Already Holding Bitcoin?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {/* Profits Card */}
                    <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-teal-400 to-cyan-500 text-white">
                        <div className="p-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-24 h-w-24 bg-black/20 rounded-lg">
                                    <img src={profit} alt="profit" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-4">Calculate your Profits</h3>
                                    <button className="bg-white text-black px-4 py-2 rounded-md inline-flex items-center space-x-2 hover:bg-gray-100 transition-colors">
                                        <span>Check Now</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tax Card */}
                    <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-orange-400 to-red-500 text-white">
                        <div className="p-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-24 h-24 bg-black/20 rounded-lg">
                                    <img src={liability} alt="liability" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-4">Calculate your tax liability</h3>
                                    <button className="bg-white text-black px-4 py-2 rounded-md inline-flex items-center space-x-2 hover:bg-gray-100 transition-colors">
                                        <span>Check Now</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Text */}
            <section>
                <p className="text-gray-700">
                    Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
                </p>
            </section>
        </div>
    );
};

export default BitcoinInfo;