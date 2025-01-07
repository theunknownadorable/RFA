import React, { useState, useEffect } from 'react';
import { creators } from '../constants/creators';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Creators() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % creators.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextCreator = () => {
    setCurrentIndex((current) => (current + 1) % creators.length);
  };

  const prevCreator = () => {
    setCurrentIndex((current) => (current - 1 + creators.length) % creators.length);
  };

  return (
    <section id="creators" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="relative max-w-md mx-auto">
          <div className="relative h-80 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200">
                  {/* Image placeholder - will be replaced later */}
                </div>
                <h3 className="text-xl font-semibold mb-2">{creators[currentIndex].name}</h3>
                <p className="text-gray-600">{creators[currentIndex].role}</p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={prevCreator}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button 
            onClick={nextCreator}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
          
          <div className="flex justify-center mt-4 gap-2">
            {creators.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}