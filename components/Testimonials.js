"use client";

import React, { useState } from 'react';

const Testimonials = () => {
  // Testimonial data array
  const testimonials = [
    {
      id: 1,
      text: "I used to miss workouts all the time. Now GrowTrack keeps me accountable — I haven't skipped a day in 3 weeks.",
      author: "Alex Jonathan",
      role: "Fitness Enthusiast",
      picture: "/mitchellee.jpg"
    },
    {
      id: 2,
      text: "Balancing classes and work was overwhelming. The reminders keep me consistent, and I finally built a study routine that sticks.",
      author: "David Hart",
      role: "Student",
      picture: "/Beti.JPG"
    },
    {
      id: 3,
      text: "I started small — just writing 10 minutes a day. Now, it’s a habit I don’t even think about missing",
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
  const nextTestimonialData = getTestimonial((currentIndex + 1) % testimonials.length);
  const prevTestimonialData = getTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen py-16 px-8 lg:px-16 xl:px-24" style={{ backgroundColor: '#EBF3FE' }}>
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Testimonials
          </h2>
          <div className="w-[80px] sm:w-[100px] h-[6px] sm:h-[8px] bg-blue-600 opacity-100 rounded-[8px] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-3 items-center justify-around">
          {/* Left Section - Avatar Display */}
          <div className="relative flex justify-center lg:justify-start mb-8 lg:mb-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-100 lg:h-100">
              {/* Central Avatar */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="/Princess.jpg" 
                    alt="Central user avatar" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Orbiting Avatars */}
              <div className="absolute inset-0">
                {/* Double dotted circles connecting the avatars */}
                <div className="style={{ backgroundColor: '#B9C8F3' }}">
                <div className="absolute inset-3 sm:inset-4 lg:inset-5 border-2 border-dotted border-blue-300 rounded-full"></div>
                <div className="absolute inset-4 sm:inset-5 lg:inset-7 border-2 border-dotted border-blue-300 rounded-full"></div>
                </div>
                
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img 
                      src="/mitchellee.jpg" 
                      alt="testimony-1" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Top Right Avatar */}
                <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img 
                      src="/Tibena.jpg" 
                      alt="testimony-2" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Bottom Right Avatar */}
                <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 translate-y-1/2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img 
                      src="/beti.JPG" 
                      alt="User avatar 3" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Bottom Avatar */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img 
                      src="/S_photo.jpg" 
                      alt="User avatar 3" 
                      className="w-full h-full object-cover rounded-full"
                      id="avatar-image-3"
                    />
                  </div>
                </div>

                {/* Bottom Left Avatar */}
                <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img 
                      src="/avatar-image-4.png" 
                      alt="User avatar 4" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Top Left Avatar */}
                <div className="absolute top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img 
                      src="/avatar-image-5.png" 
                      alt="User avatar 5" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Testimonial Card */}
          <div className="relative">
            {/* Navigation Arrows */}
             <button 
               onClick={prevTestimonial}
               className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 sm:-translate-x-12 lg:-translate-x-16 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center text-white transition-colors hover:bg-blue-600 rounded-full"
             >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#153799" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
   <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
 </svg>



      </button>

       <button 
         onClick={nextTestimonial}
         className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 sm:translate-x-12 lg:translate-x-16 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center text-white transition-colors hover:bg-blue-600 rounded-full"
       >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#153799" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
         </svg>
       </button>

            {/* Testimonial Card Stack */}
            <div className="relative">
              {/* Background Cards (for layered effect) - Three layers */}
              {/* Back layer */}
              <div className="absolute top-6 left-0 w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100"></div>
              {/* Middle layer */}
              <div className="absolute top-3 left-0 w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100"></div>
              {/* Front layer */}
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100"></div>
              
              {/* Main Testimonial Card */}
              <div className="relative bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                {/* Quotation Marks */}
                <svg
                  className="w-12 h-16 text-[#153799] mb-4"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M184 64c-64 0-120 56-120 120 0 60 36 120 100 164 12 8 28 4 36-8s4-28-8-36c-48-32-76-72-76-120v-4c56-12 96-60 96-116 0-64-56-120-120-120zm248 0c-64 0-120 56-120 120 0 60 36 120 100 164 12 8 28 4 36-8s4-28-8-36c-48-32-76-72-76-120v-4c56-12 96-60 96-116 0-64-56-120-120-120z"/>
                </svg>

                
                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {currentTestimonial.text}
                </p>
                
                {/* Author Information */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100 mr-4">
                    <img 
                      src={currentTestimonial.picture} 
                      alt={currentTestimonial.author} 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{currentTestimonial.author}</h4>
                    <p className="text-gray-500 text-sm">- {currentTestimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-32 h-full opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-32 h-full opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

