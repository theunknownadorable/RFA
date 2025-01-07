import React, { useState } from 'react';

const GOOGLE_MEET_LINK = 'https://meet.google.com/vfg-uhwr-tgs';

export function QuestionnaireForm() {
  const [formData, setFormData] = useState({
    subject: '',
    willingToTakeClasses: '',
    classLevel: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically save the data to a database
    console.log('Form submitted:', formData);
    
    // Redirect to Google Meet
    window.location.href = GOOGLE_MEET_LINK;
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-6">
      {/* Subject Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What subject are you taking?
        </label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Enter your subject"
        />
      </div>

      {/* Willingness to Take Classes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Are you willing to take classes?
        </label>
        <div className="mt-2 space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="yes"
              name="willingToTakeClasses"
              value="yes"
              checked={formData.willingToTakeClasses === 'yes'}
              onChange={(e) => setFormData({ ...formData, willingToTakeClasses: e.target.value })}
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
              required
            />
            <label htmlFor="yes" className="ml-3 block text-sm font-medium text-gray-700">
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="no"
              name="willingToTakeClasses"
              value="no"
              checked={formData.willingToTakeClasses === 'no'}
              onChange={(e) => setFormData({ ...formData, willingToTakeClasses: e.target.value })}
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
            />
            <label htmlFor="no" className="ml-3 block text-sm font-medium text-gray-700">
              No
            </label>
          </div>
        </div>
      </div>

      {/* Class Level */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Which class are you taking?
        </label>
        <select
          value={formData.classLevel}
          onChange={(e) => setFormData({ ...formData, classLevel: e.target.value })}
          required
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
        >
          <option value="">Select your class</option>
          {[1, 2, 3, 4].map((level) => (
            <option key={level} value={level}>
              Class {level}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
}