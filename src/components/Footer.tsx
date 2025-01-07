import React from 'react';
import { Bot } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-4">
          <Bot className="w-8 h-8 mr-2" />
          <span className="text-xl font-semibold">RFA</span>
        </div>
        <p className="text-sm opacity-75">© 2024 Robot Faculty Assistant. All rights reserved.</p>
      </div>
    </footer>
  );
}