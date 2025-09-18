"use client";

import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "I used to miss workouts all the time. Now GrowTrack keeps me accountable — I haven't skipped a day in 3 weeks.",
      author: "Ujunwa Princess Onyekaba",
      role: "Fitness Enthusiast",
      picture: "/Princess.jpg"
    },
    {
      id: 2,
      text: "Balancing classes and work was overwhelming. The reminders keep me consistent, and I finally built a study routine that sticks.",
      author: "Betelhem Sintayehu",
      role: "Student",
      picture: "/beti.JPG"
    },

   {
  id: 3,
  text: "I started small — just writing 10 minutes a day. Now, it&#39;s a habit I don&#39;t even think about missing",
  author: "Anne Noah",
  role: "Writer",
  picture: "/S_photo.jpg"
}

    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getTestimonial = (index) => testimonials[index];
  const currentTestimonial = getTestimonial(currentIndex);
  // const nextTestimonialData = getTestimonial((currentIndex + 1) % testimonials.length);
  // const prevTestimonialData = getTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24" style={{ backgroundColor: '#EBF3FE' }}>
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Testimonials
          </h2>
          <div className="w-[60px] sm:w-[80px] md:w-[100px] h-[4px] sm:h-[6px] md:h-[8px] bg-blue-600 opacity-100 rounded-[8px] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center justify-around">
          <div className="relative flex justify-center lg:justify-start mb-6 sm:mb-8 lg:mb-0">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] mx-auto">
              {/* Double dotted circles */}
              <div className="absolute inset-3 sm:inset-4 lg:inset-5 border-2 border-dotted border-blue-300 rounded-full"></div>
              <div className="absolute inset-4 sm:inset-5 lg:inset-7 border-2 border-dotted border-blue-300 rounded-full"></div>

              {/* Central image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="/Princess.jpg" 
                    alt="Central user picture" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

             
              <div className="absolute inset-0 flex items-center justify-center">
              
                <div className="absolute" style={{ transform: "rotate(0deg) translateX(170px)" }}>
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden" style={{ transform: "rotate(0deg)" }}>
                    <img src="/mitchellee.jpg" alt="avatar-1" className="w-full h-full object-cover" />
                  </div>
                </div>

               
                <div className="absolute" style={{ transform: "rotate(60deg) translateX(170px)" }}>
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden" style={{ transform: "rotate(-60deg)" }}>
                    <img src="/Paulemi.jpg" alt="avatar-2" className="w-full h-full object-cover" />
                  </div>
                </div>

                
                <div className="absolute" style={{ transform: "rotate(120deg) translateX(170px)" }}>
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden" style={{ transform: "rotate(-120deg)" }}>
                    <img src="/Tibena.jpg" alt="avatar-3" className="w-full h-full object-cover" />
                  </div>
                </div>

             
                <div className="absolute" style={{ transform: "rotate(180deg) translateX(170px)" }}>
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden" style={{ transform: "rotate(-180deg)" }}>
                    <img src="/S_photo.jpg" alt="avatar-4" className="w-full h-full object-cover" />
                  </div>
                </div>

               
                <div className="absolute" style={{ transform: "rotate(240deg) translateX(170px)" }}>
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden" style={{ transform: "rotate(-240deg)" }}>
                    <img src="/Tibena.jpg" alt="avatar-5" className="w-full h-full object-cover" />
                  </div>
                </div>

             
                <div className="absolute" style={{ transform: "rotate(300deg) translateX(170px)" }}>
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden" style={{ transform: "rotate(-300deg)" }}>
                    <img src="/beti.JPG" alt="avatar-6" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

         
            <div className="relative">
              <div className="absolute -top-8 sm:-top-12 right-0 z-10">
                <img 
                  src='/logo.png' 
                  alt='logo' 
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                />
              </div>
             <button 
               onClick={prevTestimonial}
               className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 sm:-translate-x-8 lg:-translate-x-12 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center text-white transition-colors hover:bg-blue-600 rounded-full"
             >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#153799" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
   <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
 </svg>
      </button>
       <button 
         onClick={nextTestimonial}
         className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 sm:translate-x-8 lg:translate-x-12 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center text-white transition-colors hover:bg-blue-600 rounded-full"
       >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#153799" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
         </svg>
       </button>
            <div className="relative">
              
              
              <div className="absolute top-6 left-0 w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100"></div>
              <div className="absolute top-3 left-0 w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100"></div>
              
              
              <div className="relative bg-white rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-10 shadow-lg border border-gray-100">
            
                <svg
                  className="w-12 h-16 text-[#153799] mb-4"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M184 64c-64 0-120 56-120 120 0 60 36 120 100 164 12 8 28 4 36-8s4-28-8-36c-48-32-76-72-76-120v-4c56-12 96-60 96-116 0-64-56-120-120-120zm248 0c-64 0-120 56-120 120 0 60 36 120 100 164 12 8 28 4 36-8s4-28-8-36c-48-32-76-72-76-120v-4c56-12 96-60 96-116 0-64-56-120-120-120z"/>
                </svg>

                
                
                <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
                  {currentTestimonial.text}
                </p>

                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-blue-100 mr-3 sm:mr-4">
                    <img 
                      src={currentTestimonial.picture} 
                      alt={currentTestimonial.author} 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">{currentTestimonial.author}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm">- {currentTestimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;

