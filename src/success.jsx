import React from 'react';
import { useState } from 'react';

function SuccessPage() {
  // You can use state to store and display application details
  // This would normally come from URL params, context, or state management
  const [applicationDetails] = useState({
    name: "John Doe",
    amount: 500,
    totalRepayment: 600,
    referenceNumber: "DP" + Math.floor(100000 + Math.random() * 900000)
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      {/* Container for better centering */}
      <div className="w-full max-w-lg mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold text-blue-700">Delta Pay</h1>
          <p className="text-gray-600 text-lg mt-3">Smart financing solutions</p>
        </div>

        {/* Success Card */}
        <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {/* Success Header */}
          <div className="p-8 bg-green-50 border-b border-gray-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Application Successful!</h2>
            <p className="text-gray-600 mt-2">Your loan application has been submitted successfully.</p>
          </div>

          {/* Application Details */}
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Application Details</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">Reference Number:</span>
                <span className="font-medium text-gray-800">{applicationDetails.referenceNumber}</span>
              </div>
              
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">Applicant Name:</span>
                <span className="font-medium text-gray-800">{applicationDetails.name}</span>
              </div>
              
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">Loan Amount:</span>
                <span className="font-medium text-gray-800">{applicationDetails.amount} Pula</span>
              </div>
              
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">Total Repayment:</span>
                <span className="font-medium text-gray-800">{applicationDetails.totalRepayment} Pula</span>
              </div>
              
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">Status:</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Under Review</span>
              </div>
            </div>

            {/* Next Steps */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-3">What happens next?</h4>
              <ol className="space-y-2 text-gray-600">
                <li className="flex">
                  <span className="font-medium text-blue-700 mr-2">1.</span>
                  <span>Our team will review your application within 24 hours.</span>
                </li>
                <li className="flex">
                  <span className="font-medium text-blue-700 mr-2">2.</span>
                  <span>You'll receive a WhatsApp message with approval status.</span>
                </li>
                <li className="flex">
                  <span className="font-medium text-blue-700 mr-2">3.</span>
                  <span>Upon approval, funds will be disbursed to your account.</span>
                </li>
              </ol>
            </div>

            {/* Buttons */}
            <div className="mt-8 space-y-4">
              <button 
                className="w-full py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors shadow-md"
                onClick={() => window.print()}
              >
                Print Receipt
              </button>
              
              <button 
                className="w-full py-4 border border-blue-700 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                onClick={() => window.location.href = '/'}
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="w-full mt-8 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-800">Need help?</h3>
                <p className="text-sm text-gray-600">Contact our support team at <span className="text-blue-700">support@deltapay.com</span> or call <span className="text-blue-700">+123 456 7890</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 text-base pb-6">
          <p>© 2025 Delta Pay. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage