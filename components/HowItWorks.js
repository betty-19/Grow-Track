import { FaPencilAlt, FaCubes, FaChartLine } from "react-icons/fa";
import React from "react";
 
const DashedChevron = ({ direction = "down", size = 260, color = "#3B82F6" }) => {
  const points = direction === "up" ? "1,7 12,1 23,7" : "1,1 12,7 23,1";
  return (
    <svg
      width={size}
      height={size / 2}
      viewBox="0 0 24 12"
      fill="none"
      stroke={color}
      strokeWidth="0.3"
      strokeDasharray="0.4 0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="chev-svg"
    >
      <polyline points={points} />
    </svg>
  );
};
 
export default function HowItWorks() {
  return (
    <section className="my-[50px] bg-white py-[70px] overflow-hidden" style={{ paddingLeft: "60px", paddingRight: "60px" }}>
      <div className="flex flex-col items-center how-it-works-title">
        <p className="font-[700] text-[34px] text-[#242629]">How it Works</p>
        <div className="w-[100px] h-[8px] bg-[#1D4ED8] rounded-[8px]" />
      </div>
 
      {/* --- large-screen '1' (keeps your original row placement) --- */}
      <p className="big-number hide-on-mobile font-[700] text-[64px] text-[#B9C8F3]">1</p>
 

      <div className="flex flex-col lg:flex-row items-center justify-around">
 
        {/* -------- STEP 1 -------- */}
        <div className="flex flex-col items-center gap-[40px] relative">
          {/* mobile/stacked number: shown only on small/medium (on top of the circle) */}
          <p className="mobile-number show-on-mobile font-[700] text-[#B9C8F3] text-[40px] md:text-[52px] absolute -top-8 left-1/2 transform -translate-x-1/2 ">
            1
          </p>
 
          <div className="flex flex-col items-center gap-[25px]">
            <div className="border-[4px] border-dashed border-[#B9C8F3] rounded-full flex items-center justify-center mid-circle
                            w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]">
              <div className="bg-[#EBF3FE] rounded-full flex items-center justify-center mid-inner
                              w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]">
                <FaCubes className="text-[#153799] w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px]" />
              </div>
            </div>
          </div>
 
          <div className="flex flex-col items-center gap-[10px]">
            <p className="font-[700] text-[18px] md:text-[20px] text-[#1D4ED8]">Define Your Goal</p>
            <p className="font-[400] text-[14px] md:text-[16px] text-[#242629] text-center max-w-[260px]">
              Choose what you want to improve — health, productivity, or personal growth
            </p>
          </div>
        </div>
 
        {/* chevron between 1 & 2 (we wrap it so we can hide/scale it for ranges) */}
        <div className="h-[20px] mid-chevron hide-on-mobile">
          <DashedChevron direction="down" size={260} />
        </div>
 
        {/* -------- STEP 2 -------- */}
        <div className="flex flex-col items-center gap-[40px] relative">
          {/* large-screen number (keeps your original absolute placement) */}
          <p className="big-number-step hide-on-mobile hidden lg:block font-[700] text-[64px] text-[#B9C8F3] absolute -top-[-80px] -left-[100px]">
            2
          </p>
 
          {/* when stacked (mobile), show number on top of its circle */}
          <p className="mobile-number show-on-mobile font-[700] text-[#B9C8F3] text-[40px] md:text-[52px] absolute -top-8 left-1/2 transform -translate-x-1/2">
            2
          </p>
 
          <div className="flex flex-col items-center gap-[25px]">
            <div className="border-[4px] border-dashed border-[#B9C8F3] rounded-full flex items-center justify-center mid-circle
                            w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]">
              <div className="bg-[#EBF3FE] rounded-full flex items-center justify-center mid-inner
                              w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]">
                <FaCubes className="text-[#153799] w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px]" />
              </div>
            </div>
          </div>
 
          <div className="flex flex-col items-center gap-[10px]">
            <p className="font-[700] text-[18px] md:text-[20px] text-[#1D4ED8]">Build your routine</p>
            <p className="font-[400] text-[14px] md:text-[16px] text-[#242629] text-center max-w-[260px]">
              The app keeps you accountable with reminders and progress feedback
            </p>
          </div>
        </div>
 
        {/* chevron between 2 & 3 */}
        <div className="h-[350px] mid-chevron hide-on-mobile">
          <DashedChevron direction="up" size={260} />
        </div>
 
        {/* -------- STEP 3 -------- */}
        <div className="flex flex-col items-center gap-[40px] relative">
          {/* large-screen number (keep original absolute placement) */}
          <p className="big-number-step hide-on-mobile hidden lg:block font-[700] text-[64px] text-[#B9C8F3] absolute -top-[-170px] -left-[70px]">
            3
          </p>
 
          {/* stacked/mobile number on top of circle */}
          <p className="mobile-number show-on-mobile font-[700] text-[#B9C8F3] text-[40px] md:text-[52px] absolute -top-8 left-1/2 transform -translate-x-1/2">
            3
          </p>
 
          <div className="flex flex-col items-center gap-[25px]">
            <div className="border-[4px] border-dashed border-[#B9C8F3] rounded-full flex items-center justify-center mid-circle
                            w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]">
              <div className="bg-[#EBF3FE] rounded-full flex items-center justify-center mid-inner
                              w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]">
                <FaChartLine className="text-[#153799] w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px]" />
              </div>
            </div>
          </div>
 
          <div className="flex flex-col items-center gap-[10px]">
            <p className="font-[700] text-[18px] md:text-[20px] text-[#1D4ED8]">Track progress</p>
            <p className="font-[400] text-[14px] md:text-[16px] text-[#242629] text-center max-w-[260px]">
              Watch your streaks grow and celebrate rewards along the way.
            </p>
          </div>
        </div>
      </div>
 
      {/* ---------- small CSS to control mid-range (1020-1150px) and mobile toggles ---------- */}
      <style>{`
  /* show/hide helpers using the 1020px threshold you wanted */
  .show-on-mobile { display: none; }
  .hide-on-mobile { display: block; }
 
  @media (max-width: 1024px) {
    .show-on-mobile { display: block !important; }   /* show numbers on stacked mode */
    .hide-on-mobile { display: none !important; }    /* hide big/row-only numbers & chevrons */
 
    .mobile-number {
      top: -80px; /* spacing between number and circle */
    }
 
    /* space between stacked steps only */
    .flex-col.lg\\:flex-row > div {
      margin-bottom: 5rem; /* space between steps */
    }
 
    .flex-col.lg\\:flex-row > div:last-child {
      margin-bottom: 0; /* no extra space after last step */
    }
 
    .how-it-works-title {
      margin-bottom: 8rem; /* space between title and first step */
    }
  }


  /* mid-range scaling: 1020px - 1150px */
  @media (min-width: 1020px) and (max-width: 1150px) {
    /* slightly smaller outer circles */
    .mid-circle { width: 180px !important; height: 180px !important; }
    /* slightly smaller inner circles */
    .mid-inner  { width: 88px !important; height: 88px !important; }
    /* smaller SVG icons inside the inner circle */
    .mid-inner svg { width: 36px !important; height: 36px !important; }
    /* slightly reduce the large numbers that appear in row */
    .big-number, .big-number-step { font-size: 48px !important; line-height: 1 !important; }
    /* shrink chevrons */
    .mid-chevron svg.chev-svg { width: 160px !important; height: 80px !important; }
  }



  @media (min-width: 1048px) and (max-width: 1270px) {
    /* slightly smaller outer circles */
    .mid-circle { width: 200px !important; height: 200px !important; }
    /* slightly smaller inner circles */
    // .mid-inner  { width: 88px !important; height: 88px !important; }
    /* smaller SVG icons inside the inner circle */
    // .mid-inner svg { width: 36px !important; height: 36px !important; }
    /* slightly reduce the large numbers that appear in row */
    // .big-number, .big-number-step { font-size: 48px !important; line-height: 1 !important; }
    /* shrink chevrons */
    .mid-chevron svg.chev-svg { width: 160px !important; height: 80px !important; }
  }


   @media (min-width: 1265px) and (max-width: 1322px) {
    /* slightly smaller outer circles */
    .mid-circle { width: 220px !important; height: 220px !important; }
    /* slightly smaller inner circles */
    // .mid-inner  { width: 88px !important; height: 88px !important; }
    /* smaller SVG icons inside the inner circle */
    // .mid-inner svg { width: 36px !important; height: 36px !important; }
    /* slightly reduce the large numbers that appear in row */
    // .big-number, .big-number-step { font-size: 48px !important; line-height: 1 !important; }
    /* shrink chevrons */
    .mid-chevron svg.chev-svg { width: 200px !important; height: 100px !important; }
  }
`}</style>
 
    </section>
  );
}