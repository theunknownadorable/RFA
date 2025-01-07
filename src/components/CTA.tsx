import React from 'react';
import { useNavigate } from 'react-router-dom';

export function CTA() {
  const navigate = useNavigate();

  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Education?</h2>
        <p className="text-xl mb-8 opacity-90">Join the future of teaching assistance today</p>
        <button 
          onClick={() => navigate('/questionnaire')}
          className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}