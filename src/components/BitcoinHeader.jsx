import React from 'react';
import bitcoin from "../assets/bitcoin.png"

const BitcoinHeader = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                    <img
                        src={bitcoin}
                        alt="Bitcoin"
                        className="w-8 h-8"
                    />
                    <span className="text-xl font-bold">Bitcoin</span>
                    <span className="text-gray-500">BTC</span>
                </div>
                <div className="bg-gray-500 text-white text-sm px-2 py-1 rounded">
                    Rank #1
                </div>
            </div>

            <div className="flex flex-row gap-5 mt-5 mb-2">
                <div>
                    <div className="text-2xl font-bold">$46,953.04</div>
                    <div className="text-gray-700">₹ 39,42,343</div>
                </div>
                <div>
                    <div className="flex items-center gap-1 mt-1">
                        <span className="text-emerald-500 bg-[#EBF9F4] px-1 rounded-md text-sm">▲ 2.51%</span>
                        <span className="text-gray-500 text-xs">(24H)</span>
                    </div>
                </div>
            </div>
            <div className=' border-b-2 mb-4'></div>
        </div>
    );
};

export default BitcoinHeader;