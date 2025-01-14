import React from 'react';
import img from "../assets/get-started.png"

const GetStartedCard = () => (
    <div className="flex flex-col justify-center items-center text-center gap-2 max-w-[96] bg-[#0052FE] text-white p-6 rounded-lg shadow">
        <div className="text-xl font-bold mb-4 text-center">Get Started with KoinX for FREE</div>
        <div className="text-sm mb-4">
            With our range of features that you can equip for free, KoinX allows you to
            be more educated and aware of your tax reports.
        </div>
        <div>
            <img src={img} alt="get started" />
        </div>
        <button className="bg-white text-black p-2 rounded-lg font-semibold">Get Started for FREE</button>
    </div>
);

export default GetStartedCard;