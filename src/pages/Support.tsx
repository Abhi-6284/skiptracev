import React from 'react';
import { Mail, MessageSquare, FileText, HelpCircle } from 'lucide-react';

const Support: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Help & Support</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-lg font-medium text-gray-800 mb-4">How can we help you?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
            <div className="flex items-start">
              <div className="bg-primary-100 p-3 rounded-full mr-4">
                <MessageSquare size={20} className="text-primary-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Chat with Support</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Get instant help from our support team via live chat
                </p>
                <button className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700">
                  Start a chat <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-100">
            <div className="flex items-start">
              <div className="bg-secondary-100 p-3 rounded-full mr-4">
                <Mail size={20} className="text-secondary-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Email Support</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Send us an email and we'll get back to you within 24 hours
                </p>
                <button className="inline-flex items-center text-sm font-medium text-secondary-600 hover:text-secondary-700">
                  Email support <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-md">
            <button className="w-full flex justify-between items-center px-4 py-3 text-left">
              <span className="font-medium text-gray-900">How does SuperSkip find property owner information?</span>
              <HelpCircle size={16} className="text-gray-400" />
            </button>
            <div className="px-4 pb-3">
              <p className="text-gray-500">
                SuperSkip sources data from multiple public and proprietary databases, including property records, utility records, voter registrations, and other public information sources to provide comprehensive skip tracing results.
              </p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-md">
            <button className="w-full flex justify-between items-center px-4 py-3 text-left">
              <span className="font-medium text-gray-900">What formats can I use for batch uploads?</span>
              <HelpCircle size={16} className="text-gray-400" />
            </button>
            <div className="px-4 pb-3">
              <p className="text-gray-500">
                You can upload CSV or Excel files (.xlsx, .xls) for batch processing. Each file should contain columns for the data you want to search, such as names, addresses, or phone numbers.
              </p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-md">
            <button className="w-full flex justify-between items-center px-4 py-3 text-left">
              <span className="font-medium text-gray-900">How accurate is the data provided by SuperSkip?</span>
              <HelpCircle size={16} className="text-gray-400" />
            </button>
            <div className="px-4 pb-3">
              <p className="text-gray-500">
                SuperSkip typically achieves 85-95% accuracy rates for property owner contact information. Each result includes a confidence score to help you assess the reliability of the data.
              </p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-md">
            <button className="w-full flex justify-between items-center px-4 py-3 text-left">
              <span className="font-medium text-gray-900">Can I export my search results?</span>
              <HelpCircle size={16} className="text-gray-400" />
            </button>
            <div className="px-4 pb-3">
              <p className="text-gray-500">
                Yes, you can export results in various formats including CSV, Excel, and PDF. You can also save results as lists within the platform for easy access later.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <button className="text-primary-600 hover:text-primary-700 font-medium">
            View all FAQs
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start">
          <div className="bg-accent-100 p-3 rounded-full mr-4">
            <FileText size={20} className="text-accent-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">Documentation & Guides</h3>
            <p className="text-sm text-gray-500 mb-4">
              Explore our comprehensive documentation and video tutorials
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-md hover:bg-gray-100">
                <h4 className="font-medium text-gray-800 mb-1">Getting Started Guide</h4>
                <p className="text-sm text-gray-500">Learn the basics of using SuperSkip</p>
              </button>
              
              <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-md hover:bg-gray-100">
                <h4 className="font-medium text-gray-800 mb-1">Batch Searching</h4>
                <p className="text-sm text-gray-500">How to process multiple searches at once</p>
              </button>
              
              <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-md hover:bg-gray-100">
                <h4 className="font-medium text-gray-800 mb-1">List Management</h4>
                <p className="text-sm text-gray-500">Organize and manage your results</p>
              </button>
              
              <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-md hover:bg-gray-100">
                <h4 className="font-medium text-gray-800 mb-1">Video Tutorials</h4>
                <p className="text-sm text-gray-500">Step-by-step visual guides</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;