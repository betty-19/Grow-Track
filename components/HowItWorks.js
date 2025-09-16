





import { FaPencilAlt,FaCubes,FaChartLine,FaChevronUp, FaChevronDown } from "react-icons/fa";
// import { DashedUpArrow, DashedDownArrow } from "./DashedVerticalArrow";
import React from "react";
//import { ArrowUp, ArrowDown } from "lucide-react";


export default function HowItWorks(){
    return(
        <section >
            <div className="flex flex-col items-center">
                <p className="font-[700] text-[34px] text-[#242629]">How it Works</p>
                <div className="w-[100px] h-[8px] bg-[#1D4ED8] rounded-[8px]"></div>
            </div>
           
            <div className="flex items-end justify-around mt-[70px]">
                <div className="flex flex-col items-center  gap-[25px]">
                     <div className="border-[4px] w-[240px] h-[240px] text-[#B9C8F3] border-dashed rounded-[50%] flex items-center justify-center">
                <div className="w-[120px] h-[120px] bg-[#EBF3FE] flex items-center justify-center rounded-[50%]">
                <FaPencilAlt className="w-[48px] h-[48px] text-[#153799]"/>
                </div>
                
            </div> 
             <div className="flex flex-col items-center justify-center  gap-[10px]" >
                    <p className="font-[700] text-[20px] text-[#1D4ED8]">Define Your Goal</p>
                    <p className="font-[400] text-[16px] text-[#242629] text-center"> Choose what you want to improve — health, productivity, or personal growth</p>
                    
                </div>
                </div>
                
             <div>
                {/* <DashedDownArrow className="border-[3px] border-dashed w-[230px] h-[56px] text-[#4A71E0]"/> */}
            </div>
            {/* <div className="w-4 h-4 border-l-2 border-b-2 border-dashed transform rotate-45"></div> */}

<div className="flex flex-col items-center  gap-[25px]">
    <div className="border-[4px] w-[240px] h-[240px] text-[#B9C8F3] border-dashed rounded-[50%] flex items-center justify-center">
                <div className="w-[120px] h-[120px] bg-[#EBF3FE] flex items-center justify-center rounded-[50%]">
                <FaCubes className="w-[48px] h-[48px] text-[#153799]"/>
                </div>
            </div>
            <div className="flex flex-col items-center gap-[10px]">
                    <p className="font-[700] text-[20px] text-[#1D4ED8]">Build your routine</p>
                    <p className="font-[400] text-[16px] text-[#242629] text-center">The app keeps you accountable with reminders and progress feedback</p>
                    
                </div>
</div>
             
            <div className="w-4 h-4 border-l-2 border-b-2 border-dashed transform -rotate-135"></div>


            <div className="flex flex-col items-center gap-[25px]">
                 <div className="border-[4px] w-[240px] h-[240px] text-[#B9C8F3] border-dashed rounded-[50%] flex items-center justify-center">
                <div className="w-[120px] h-[120px] bg-[#EBF3FE] flex items-center justify-center rounded-[50%]">
                <FaChartLine className="w-[48px] h-[48px] text-[#153799]"/>
                </div>
            </div>
            <div className="flex flex-col items-center gap-[10px]">
                    <p className="font-[700] text-[20px] text-[#1D4ED8]">Track progress</p>
                    <p className="font-[400] text-[16px] text-[#242629] text-center">Watch your streaks grow and celebrate rewards along the way.</p>
                    
                </div>
            </div>

            
            </div>
            {/* <div className="flex items-end justify-around">
                <div className="flex flex-col items-center justify-center" >
                    <p className="font-[700] text-[20px] text-[#1D4ED8]">Define Your Goal</p>
                    <p className="font-[400] text-[16px] text-[#242629]"> Choose what you want to improve — health, productivity, or personal growth</p>
                    
                </div>
                <div className="flex flex-col items-center">
                    <p className="font-[700] text-[20px] text-[#1D4ED8]">Build your routine</p>
                    <p className="font-[400] text-[16px] text-[#242629]">The app keeps you accountable with reminders and progress feedback</p>
                    
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-[700] text-[20px] text-[#1D4ED8]">Track progress</p>
                    <p className="font-[400] text-[16px] text-[#242629]">Watch your streaks grow and celebrate rewards along the way.</p>
                    
                </div>
            </div> */}
           
        </section>
    )
}