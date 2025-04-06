import { useState } from 'react'

function App() {
  const [showMore, setShowMore] = useState(false)
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      {/* Container for better centering */}
      <div className="w-full max-w-lg mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold text-blue-700">Delta Pay</h1>
          <p className="text-gray-600 text-lg mt-3">Smart financing solutions</p>
        </div>
        
        {/* Main Card */}
        <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {/* Interest Rate Card */}
          <div className="p-8 border-b border-gray-100 bg-blue-50">
            <h2 className="text-gray-700 text-base font-medium">Current Interest Rate</h2>
            <div className="mt-3 flex items-baseline justify-between">
              <span className="text-6xl font-bold text-blue-700">20%</span>
              <span className="text-gray-600 text-base">Annual Rate</span>
            </div>
          </div>
          
          {/* Login Section */}
          <div className="p-8">
            <button 
              className="w-full py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors shadow-md"
            >
              Log In
            </button>
            
            <button 
              className="w-full mt-4 py-4 border border-blue-700 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Create Account
            </button>
          </div>
        </div>
        
        {/* More Info Card */}
        <div className="w-full mt-8 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">More Information</h2>
              <button 
                onClick={() => setShowMore(!showMore)}
                className="text-blue-700 hover:text-blue-900 font-medium"
              >
                {showMore ? "Hide" : "Show"}
              </button>
            </div>
            
            {showMore && (
              <div className="mt-6 space-y-4 text-gray-600">
                <p className="text-lg">Delta Pay offers personal loans with competitive rates and flexible payment options.</p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-center">
                    <span className="mr-3 text-green-500 text-xl">✓</span>
                    <span className="text-lg">Quick application process</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 text-green-500 text-xl">✓</span>
                    <span className="text-lg">No hidden fees</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 text-green-500 text-xl">✓</span>
                    <span className="text-lg">Flexible repayment terms</span>
                  </li>
                </ul>
                <p className="text-base text-gray-500 mt-6">
                  Terms and conditions apply. Interest rates may vary based on credit score and loan amount.
                </p>
              </div>
            )}
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

export default App