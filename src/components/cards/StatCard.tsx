import React from "react";

interface MetricCardProps {
    icon: string;
    title: string;
    value: string;
}

const StatCard: React.FC<MetricCardProps> = ({ icon, title, value }) => {
    return (
        <div className="flex items-center min-w-[257px] min-h-[97px] gap-5 py-1 px-4 md:py-3 md:pr-8 md:pl-5 bg-white rounded-3xl">
            <div className="w-12 h-12 md:w-[56px] md:h-[56px] flex justify-center items-center bg-[#F4F7FE] rounded-full shadow-sm">
                <img
                    loading="lazy"
                    src={icon}
                    alt={title}
                    className="shrink-0 w-6 h-6 md:w-8 md:h-8 aspect-auto"
                />
            </div>
            <div className="flex flex-col flex-grow">
                <div className="text-xs md:text-sm font-medium tracking-tight leading-5 text-slate-400">
                    {title}
                </div>
                <div className="mt-1 text-lg md:text-2xl font-bold tracking-tight leading-6 text-blue-950">
                    {value}
                </div>
            </div>
        </div>
    );
};

export default StatCard;