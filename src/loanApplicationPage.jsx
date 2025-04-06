import { useState } from 'react'

function LoanApplicationPage() {
  const [showMore, setShowMore] = useState(false)
  const [loanAmount, setLoanAmount] = useState(100)
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    studentId: '',
    collateral: '',
    proofOfRegistration: null
  })

  // Calculate total repayment amount with 20% interest
  const interestAmount = loanAmount * 0.2
  const totalRepayment = loanAmount + interestAmount

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      proofOfRegistration: e.target.files[0]
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Process form submission (would connect to backend in real implementation)
    alert(`Application submitted!\nName: ${formData.name}\nLoan Amount: ${loanAmount} Pula\nTotal Repayment: ${totalRepayment} Pula`)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      {/* Container for better centering */}
      <div className="w-full max-w-lg mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold text-blue-700">Delta Pay</h1>
          <p className="text-gray-600 text-lg mt-3">Smart financing solutions</p>
        </div>

        {/* Loan Calculator Card */}
        <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-8">
          <div className="p-8 border-b border-gray-100 bg-blue-50">
            <h2 className="text-gray-700 text-xl font-medium">Loan Calculator</h2>
            
            {/* Slider for loan amount */}
            <div className="mt-6">
              <label className="block text-gray-600 mb-2">Loan Amount: {loanAmount} Pula</label>
              <input 
                type="range" 
                min="1" 
                max="1000" 
                value={loanAmount} 
                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 Pula</span>
                <span>1000 Pula</span>
              </div>
            </div>

            {/* Interest Rate Display */}
            <div className="mt-6">
              <h3 className="text-gray-700 text-base font-medium">Current Interest Rate</h3>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-4xl font-bold text-blue-700">20%</span>
                <span className="text-gray-600 text-base">Annual Rate</span>
              </div>
            </div>

            {/* Total Repayment */}
            <div className="mt-6 p-4 bg-blue-100 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Loan Amount:</span>
                <span className="font-medium">{loanAmount} Pula</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-700">Interest (20%):</span>
                <span className="font-medium">{interestAmount.toFixed(2)} Pula</span>
              </div>
              <div className="flex justify-between items-center mt-2 pt-2 border-t border-blue-200">
                <span className="text-gray-800 font-medium">Total Repayment:</span>
                <span className="text-blue-700 font-bold text-xl">{totalRepayment.toFixed(2)} Pula</span>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <form onSubmit={handleSubmit} className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Personal Information</h3>
            
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* WhatsApp Number */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="whatsapp">
                WhatsApp Number
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                required
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Student ID */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="studentId">
                Student ID
              </label>
              <input
                id="studentId"
                name="studentId"
                type="text"
                required
                value={formData.studentId}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Collateral */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="collateral">
                Collateral Description
              </label>
              <textarea
                id="collateral"
                name="collateral"
                required
                value={formData.collateral}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your collateral item(s)..."
              ></textarea>
            </div>
            
            {/* Proof of Registration */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="proofOfRegistration">
                Proof of Registration (PDF)
              </label>
              <input
                id="proofOfRegistration"
                name="proofOfRegistration"
                type="file"
                required
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">Please upload your proof of registration as PDF</p>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors shadow-md"
            >
              Submit Application
            </button>
          </form>
        </div>

        {/* More Info Card */}
        <div className="w-full mt-4 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
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

export default LoanApplicationPage