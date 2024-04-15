import React from "react";

interface GPointsProps {
    points: number;
}

const Points: React.FC<GPointsProps> = ({ points }) => {
    return (
        <div className="flex  sm:gap-5 gap-2 items-start px-3 py-2.5 bg-gray-400 rounded-lg">
            <div className="flex flex-col whitespace-nowrap">
                <div className="text-xs font-medium tracking-tight leading-4 text-[#E9EDF7]">
                    GPoints
                </div>
                <div className=" text-base font-bold tracking-tight leading-5 text-white">
                    {points.toLocaleString()}
                </div>
            </div>
            <button className=" flex flex-col justify-center p-0.5 text-xs font-medium tracking-wide leading-5 text-center text-white bg-violet-100 rounded-[28.851px]">
                <div className="justify-center px-5 py-1 bg-orange-500 rounded-[28.851px]">
                    BUY
                </div>
            </button> 
        </div>
    );
};

export default Points;