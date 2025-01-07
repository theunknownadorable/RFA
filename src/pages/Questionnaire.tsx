import React from 'react';
import { QuestionnaireForm } from '../components/questionnaire/QuestionnaireForm';

export function Questionnaire() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Tell Us About Yourself</h1>
        <QuestionnaireForm />
      </div>
    </div>
  );
}