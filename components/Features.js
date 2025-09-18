import React from 'react';

const Features = () => {
  return (
    <div className="min-h-screen py-8 md:py-16 px-4" style={{ backgroundColor: '#EBF3FE' }}>
      <div className="text-center mb-8 md:mb-12">
       <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"> Features </h2>
<div className="w-[80px] sm:w-[100px] h-[6px] sm:h-[8px] bg-blue-600 opacity-100 rounded-[8px] mx-auto"></div>
</div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section - Smartphone Mockups Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <img 
              src="/features-image.png" 
              alt="GrowTrack app on smartphones" 
              className="w-full max-w-md sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
              style={{ opacity: 1 }}
            />
          </div>

          {/* Right Section - Features */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            {/* Features Title */}
            
           

           

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Feature 1: Simple Habit Creation */}
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto sm:max-w-none sm:mx-0" style={{ minHeight: '280px', borderRadius: '20px', opacity: 1, padding: '24px' }}>
                <div className="bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto" style={{ width: '60px', height: '60px', opacity: 1 }}>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#153799]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1D4ED8] mb-3 sm:mb-4 text-center">
                  Simple Habit Creation
                </h3>
                <p className="text-gray-600 text-center text-sm sm:text-base" style={{ fontFamily: 'font/family/HeaderFont', fontWeight: 400, lineHeight: '120%', letterSpacing: '0%' }}>
                  Create new habits in seconds with an easy, clutter-free setup
                </p>
              </div>

              {/* Feature 2: Smart Reminders */}
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto sm:max-w-none sm:mx-0" style={{ minHeight: '280px', borderRadius: '20px', opacity: 1, padding: '24px' }}>
                <div className="bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto" style={{ width: '60px', height: '60px', opacity: 1 }}>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#153799]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1D4ED8] mb-3 sm:mb-4 text-center">
                  Smart Reminders
                </h3>
                <p className="text-gray-600 text-center text-sm sm:text-base" style={{ fontFamily: 'font/family/HeaderFont', fontWeight: 400, lineHeight: '120%', letterSpacing: '0%' }}>
                  Never miss a habit — gentle nudges arrive exactly when you need them.
                </p>
              </div>

              {/* Feature 3: Visual Progress Tracking */}
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto sm:max-w-none sm:mx-0" style={{ minHeight: '280px', borderRadius: '20px', opacity: 1, padding: '24px' }}>
                <div className="bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto" style={{ width: '60px', height: '60px', opacity: 1 }}>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#153799]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1D4ED8] mb-3 sm:mb-4 text-center">
                  Visual Progress Tracking
                </h3>
                <p className="text-gray-600 text-center text-sm sm:text-base" style={{ fontFamily: 'font/family/HeaderFont', fontWeight: 400, lineHeight: '120%', letterSpacing: '0%' }}>
                  Charts, streaks, and stats that keep you engaged
                </p>
              </div>

              {/* Feature 4: Gamified Motivation */}
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto sm:max-w-none sm:mx-0" style={{ minHeight: '280px', borderRadius: '20px', opacity: 1, padding: '24px' }}>
                <div className="bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto" style={{ width: '60px', height: '60px', opacity: 1 }}>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#153799]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1D4ED8] mb-3 sm:mb-4 text-center">
                  Gamified Motivation
                </h3>
                <p className="text-gray-600 text-center text-sm sm:text-base" style={{ fontFamily: 'font/family/HeaderFont', fontWeight: 400, lineHeight: '120%', letterSpacing: '0%' }}>
                  Earn points, badges, and celebrate milestones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
