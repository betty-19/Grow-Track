import { FaPencilAlt, FaCubes, FaChartLine } from "react-icons/fa";
import React from "react";
 
// Reusable dashed chevron (up or down)
const DashedChevronOld = ({ direction = "down", size = 400, color = "#3B82F6" }) => {
const rotate =
direction === "up" ? "rotate(180)" :
direction === "left" ? "rotate(90)" :
direction === "right" ? "rotate(-90)" : "rotate(0)";
 
return (
<svg
width={size}
height={size / 2}
viewBox="0 0 24 12"
fill="none"
stroke={color}
strokeWidth="0.2"
strokeDasharray="1 0.7"
strokeLinecap="round"
strokeLinejoin="round"
style={{ transform: rotate }}
>
{/* Just the chevron head */}
{/* <polyline points="0,0 12,8 22,1" /> */}
<polyline points="1,1 12,7 23,1" />
</svg>
);
};
// Reusable dashed chevron (up or down)
const DashedChevron = ({ direction = "down", size = 260, color = "#3B82F6" }) => {
 
const points =
direction === "up"
? "1,7 12,1 23,7"
: "1,1 12,7 23,1";
 
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
>
<polyline points={points} />
</svg>
);
};
 
 
 
export default function HowItWorks() {
return (
<section className="my-[50px]">
<div className="flex flex-col items-center">
<p className="font-[700] text-[34px] text-[#242629]">How it Works</p>
<div className="w-[100px] h-[8px] bg-[#1D4ED8] rounded-[8px]"></div>
</div>
 <p className="font-[700] text-[64px] text-[#B9C8F3]">1</p>
<div className="flex items-center justify-around">

    {/* Step 1 */}
    <div className="flex flex-col items-center  gap-[40px]">
<div className="flex flex-col items-start justify-center ">

<div className="flex flex-col items-center gap-[25px] ">
<div className="border-[4px] w-[240px] h-[240px] text-[#B9C8F3] border-dashed rounded-[50%] flex items-center justify-center">
<div className="w-[120px] h-[120px] bg-[#EBF3FE] flex items-center justify-center rounded-[50%]">
<FaCubes className="w-[48px] h-[48px] text-[#153799]" />
</div>
</div>
</div>
</div>
<div className="flex flex-col items-center gap-[10px]">
<p className="font-[700] text-[20px] text-[#1D4ED8]">Define Your Goal</p>
<p className="font-[400] text-[16px] text-[#242629] text-center">
 Choose what you want to improve — health, productivity, or personal growth
</p>
</div>
    </div>


<div className="h-[20px]">
<DashedChevron direction="down" size={260}/>
</div>
 
{/* Step 2 */}
<div className="flex flex-col items-center gap-[40px]">
{/* <div className="flex items-center justify-center "> */}
<div className="relative">
<p className="font-[700] text-[64px] text-[#B9C8F3] absolute -top-[-80px] -left-[100px]">2</p>
<div className="flex flex-col items-center gap-[25px] ">
<div className="border-[4px] w-[240px] h-[240px] text-[#B9C8F3] border-dashed rounded-[50%] flex items-center justify-center">
<div className="w-[120px] h-[120px] bg-[#EBF3FE] flex items-center justify-center rounded-[50%]">
<FaCubes className="w-[48px] h-[48px] text-[#153799]" />
</div>
</div>
</div>
</div>
<div className="flex flex-col items-center gap-[10px]">
<p className="font-[700] text-[20px] text-[#1D4ED8]">Build your routine</p>
<p className="font-[400] text-[16px] text-[#242629] text-center">
The app keeps you accountable with reminders and progress feedback
</p>
</div>
</div>

 
 
<div className="h-[350px] ">
<DashedChevron direction="up" size={260} />
</div>
 
{/* Step 3 */}
<div className="flex flex-col items-center gap-[40px]">
   {/* <div className="flex items-end justify-center "> */}
    <div className="relative">
<p className="font-[700] text-[64px] text-[#B9C8F3] absolute -top-[-170px] -left-[70px]">3</p>
<div className="flex flex-col items-center gap-[25px]">
<div className="border-[4px] w-[240px] h-[240px] text-[#B9C8F3] border-dashed rounded-[50%] flex items-center justify-center">
<div className="w-[120px] h-[120px] bg-[#EBF3FE] flex items-center justify-center rounded-[50%]">
<FaChartLine className="w-[48px] h-[48px] text-[#153799]" />
</div>
</div>
</div>
</div> 
<div className="flex flex-col items-center gap-[10px]">
<p className="font-[700] text-[20px] text-[#1D4ED8]">Track progress</p>
<p className="font-[400] text-[16px] text-[#242629] text-center">
Watch your streaks grow and celebrate rewards along the way.
</p>
</div>
</div>

 
</div>
 
{/* <div className="flex items-center justify-around">
<div className="flex flex-col items-center gap-[10px]">
<p className="font-[700] text-[20px] text-[#1D4ED8]">Build your routine</p>
<p className="font-[400] text-[16px] text-[#242629] text-center">
The app keeps you accountable with reminders and progress feedback
</p>
</div>
<div className="flex flex-col items-center gap-[10px]">
<p className="font-[700] text-[20px] text-[#1D4ED8]">Build your routine</p>
<p className="font-[400] text-[16px] text-[#242629] text-center">
The app keeps you accountable with reminders and progress feedback
</p>
</div>
<div className="flex flex-col items-center gap-[10px]">
<p className="font-[700] text-[20px] text-[#1D4ED8]">Track progress</p>
<p className="font-[400] text-[16px] text-[#242629] text-center">
Watch your streaks grow and celebrate rewards along the way.
</p>
</div>
</div> */}
</section>
);
}

