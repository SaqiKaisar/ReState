const HomePage = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-[#F5FBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-[#E7FAF6] rounded-full px-4 py-2">
              <p className="text-sm text-gray-900 flex items-center">
                <span className="w-2 h-2 bg-[#00E5BE] rounded-full mr-2"></span>
                10.1% average investor returns in 2024
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Build your wealth through <span className="text-[#00E5BE]">real estate</span>
            </h1>

            <p className="text-lg text-gray-600">
              Thousands of investors all over the world are using Stake to access income generating real estate deals in
              high growth markets, from only AED 500
            </p>

            <div className="flex space-x-4">
              <a href="#" className="flex-shrink-0">
                <img src="/app-store.svg" alt="Download on App Store" className="h-12" />
              </a>
              <a href="#" className="flex-shrink-0">
                <img src="/google-play.svg" alt="Get it on Google Play" className="h-12" />
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://sjc.microlink.io/3yNflL-x56VTVij6B8gHGrhHw5l8UDFUIQGob2aXeslO42AKZzOZmzwd6Ve4RouiLSxohHAb5ofXh9BUDN5nSA.jpeg"
              alt="Stake App Interface"
              className="w-full"
            />
          </div>
        </div>

        <div className="mt-24">
          <p className="text-center text-gray-600 mb-8">We've been featured in</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            <img src="/forbes.svg" alt="Forbes" className="h-6" />
            <img src="/cnn.svg" alt="CNN" className="h-6" />
            <img src="/bloomberg.svg" alt="Bloomberg" className="h-6" />
            <img src="/techcrunch.svg" alt="TechCrunch" className="h-6" />
            <img src="/arab-news.svg" alt="Arab News" className="h-6" />
            <img src="/time.svg" alt="Time" className="h-6" />
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-b from-white to-[#F5FBF9]">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-[#E7FAF6] rounded-full px-4 py-2">
              <svg className="w-4 h-4 text-[#00E5BE]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" />
              </svg>
              <span className="text-sm text-gray-900">Invest from anywhere in the world</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Invest in high <span className="text-[#00E5BE]">income generating</span> properties in{" "}
              <span className="text-[#00E5BE]">Dubai</span>
            </h1>

            <div className="inline-flex items-center space-x-2 bg-[#E7FAF6] rounded-full px-4 py-2">
              <svg className="w-4 h-4 text-[#00E5BE]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
              </svg>
              <span className="text-sm text-gray-900">10.1% average investor returns in 2024</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#00E5BE] rounded-full opacity-20 blur-3xl"></div>
            <img
              src="https://sjc.microlink.io/JNLOnNsTD3JqTiIBlxtSRfQkg1ymf--IxoN9FqPc5toLk6sz1_EVo4WtF11Utl3uO89nYW-b2sMgMngCEti8VA.jpeg"
              alt="Stake App Interface"
              className="relative z-10 w-full max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900">
              945<span className="text-[#00E5BE]">K+</span>
            </h3>
            <p className="text-gray-600 mt-2">Registered users</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900">
              AED 822<span className="text-[#00E5BE]">M+</span>
            </h3>
            <p className="text-gray-600 mt-2">Property transactions</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900">
              AED 26.8<span className="text-[#00E5BE]">M+</span>
            </h3>
            <p className="text-gray-600 mt-2">Rental income paid</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default HomePage

