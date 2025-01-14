import React, { useState } from 'react';
import { TrendingUp, TrendingDown, HelpCircle, ChevronRight, ChevronLeft,NotebookText } from 'lucide-react';

const KeyEventCard = ({ icon, bgColor, title, description }) => (
  <div className={`${bgColor} p-4 rounded-lg h-full`}>
    <div className="flex items-start gap-3">
      {icon}
      <div>
        <h3 className="font-medium text-sm mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const ProgressBar = ({ label, percentage, color }) => (
  <div className="flex items-center gap-4 mb-2">
    <div className="w-8 text-sm text-gray-600">{label}</div>
    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <div 
        className={`h-full ${color}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
    <div className="w-10 text-right text-sm">{percentage}%</div>
  </div>
);

const SentimentSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      icon: <div className="bg-blue-100 p-2 rounded-full">
        <TrendingDown className="w-4 h-4 text-blue-600" />
      </div>,
      bgColor: "bg-blue-50",
      title: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
    },
    {
      icon: <div className="bg-green-100 p-2 rounded-full">
        <TrendingUp className="w-4 h-4 text-green-600" />
      </div>,
      bgColor: "bg-green-50",
      title: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del"
    },
    {
      icon: <div className="bg-violet-100 p-2 rounded-full">
        <NotebookText className="w-4 h-4 text-violet-600" />
      </div>,
      bgColor: "bg-violet-50",
      title: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del"
    },
    {
      icon: <div className="bg-blue-100 p-2 rounded-full">
        <TrendingDown className="w-4 h-4 text-blue-600" />
      </div>,
      bgColor: "bg-blue-50",
      title: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
    },
    {
      icon: <div className="bg-green-100 p-2 rounded-full">
        <TrendingUp className="w-4 h-4 text-green-600" />
      </div>,
      bgColor: "bg-green-50",
      title: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del"
    },
  ];

  const maxIndex = window.innerWidth >= 640 ? events.length - 2 : events.length - 1;

   const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };


  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Sentiment</h2>
      
      {/* Key Events Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-base font-medium text-gray-700">Key Events</h3>
          <HelpCircle className="w-4 h-4 text-gray-400" />
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
          <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 640 ? 2 : 1))}%)`,
              }}
            >
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`w-full space-x-2 ${
                    window.innerWidth >= 640 ? 'sm:w-1/2' : 'w-full'
                  } flex-shrink-0`}
                >
                  <KeyEventCard {...event} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center ${
              currentIndex === 0 ? 'text-gray-300' : 'text-gray-600'
            }`}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center ${
              currentIndex >= maxIndex ? 'text-gray-300' : 'text-gray-600'
            }`}
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-3 gap-1.5">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-1.5 h-1.5 rounded-full ${
                  currentIndex === i ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Analyst Estimates Section */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-base font-medium text-gray-700">Analyst Estimates</h3>
          <HelpCircle className="w-4 h-4 text-gray-400" />
        </div>
        
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center">
            <span className="text-2xl text-green-500 font-semibold">76%</span>
          </div>
          
          <div className="flex-1">
            <ProgressBar label="Buy" percentage={76} color="bg-green-500" />
            <ProgressBar label="Hold" percentage={8} color="bg-gray-300" />
            <ProgressBar label="Sell" percentage={16} color="bg-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentSection;