"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubscribeBtn = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email)
    {
      setError("Please Enter your Email");
    }
    else if(!emailRegex.test(email))
      {
        setError("Please enter a valid email address.");
      setIsSubscribe(false);
      }
      else{
        setIsSubscribe(true);
      setError("");
      }
  }

  return (
    <>
      <section
        className="
          bg-[#EBF3FE] 
          flex flex-col items-center text-center 
          gap-10 py-20 px-6
          md:grid md:grid-cols-2 md:text-left 
          lg:flex lg:flex-row lg:justify-around lg:items-start
          mt-[50px]
        "
      >
      
        <div>
          <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
            <img src="../logo.png" alt="" className="w-10 h-10" />
            <p className="text-[20px] font-[700] text-[#242629]">GrowTrack</p>
          </div>
          <p className="font-[500] text-[20px] text-[#242629]">
            Helping you build <br /> habits that last
          </p>
        </div>

       {[
          { title: "Links", items: ["Features", "How It Works", "Testimonials", "Contact Us"] },
          { title: "Socials", items: ["Instagram", "Facebook", "LinkedIn", "Twitter(X)"] },
          { title: "Legal", items: ["Privacy Policy", "Terms of Service"] },
        ].map((group) => (
          <div key={group.title}>
            <p className="text-[#242629] text-[20px] font-[700] mb-[10px]">{group.title}</p>
            <ul className="flex flex-col gap-[10px] font-[500] text-[14px] text-[#242629]">
              {group.items.map((item) => (
                <li key={item} className="hover:text-[#1D4ED8] cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-4">
          <p className="font-[700] text-[20px] text-[#242629]">
            Subscribe to our News
          </p>
         <div className="
  border border-[#153799] rounded-[20px]
  flex items-center bg-white 
  w-full max-w-[340px] min-w-[260px] h-[48px] 
  mx-auto md:mx-0 px-2 sm:px-3
">
  <input
    type="email"
    placeholder="Enter your email address here"
    id="email"
    onChange={(e)=> setEmail(e.target.value)}
    className="
      flex-1 text-sm sm:text-[12px] font-[400] text-[#242629] 
      placeholder:text-[#242629] 
      focus:outline-none 
      pr-2   
    "
    required
  />
  <button
    className="
      flex-shrink-0  /* prevents shrinking over the input */
      flex items-center justify-center 
      bg-[#1D4ED8] rounded-full cursor-pointer 
      hover:bg-[#153799] transition-colors 
      w-9 h-9 sm:w-10 sm:h-10
    "
    onClick={handleSubscribeBtn}
  >
    <FaArrowRight className="text-[#FAFAFA] text-lg sm:text-[20px]" />
  </button>
</div>

          {isSubscribe && !error &&(
            <p className="font-[400] text-[16px] text-[#242629] sm:text-[18px] md:text-[20px] ">
              You're in! Thanks for subscribing
            </p>
          )}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
      </section>

      <div className="h-[76px] bg-[#153799] flex items-center justify-center font-[400] text-[14px] text-[#FAFAFA] text-center px-4">
        &copy; 2025 Smart Habit Tracker. All rights reserved.
      </div>
    </>
  );
}
