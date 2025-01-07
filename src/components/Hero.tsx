import React from 'react';
import { Bot } from 'lucide-react';
import { useAudioScroll } from '../hooks/useAudioScroll';

export function Hero() {
  const { playAudio } = useAudioScroll();

  const scrollToCreators = () => {
    const creatorsSection = document.getElementById('creators');
    if (creatorsSection) {
      creatorsSection.scrollIntoView({ behavior: 'smooth' });
      playAudio();
    }
  };

  return (
    <header className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Bot className="w-16 h-16 text-blue-600" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          RFA - Robot Faculty Assistant
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Revolutionizing education with AI-powered teaching assistance
        </p>
        <button 
          onClick={scrollToCreators}
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Learn More
        </button>
      </div>
    </header>
  );
}