import React from "react";

interface MetricCardProps {
    icon: string;
    title: string;
    value: string;
}

const StatCard: React.FC<MetricCardProps> = ({ icon, title, value }) => {
    return (
        <div className="flex gap-5 py-5 pr-20 pl-4 bg-white rounded-3xl max-md:pr-5">
            <img
                loading="lazy"
                src={icon}
                alt={title}
                className="shrink-0 w-14 aspect-square"
            />
            <div className="flex flex-col my-auto">
                <div className="text-sm font-medium tracking-tight leading-6 text-slate-400">
                    {title}
                </div>
                <div className="mt-3 text-2xl font-bold tracking-tight leading-8 text-blue-950">
                    {value}
                </div>
            </div>
        </div>
    );
};


export default StatCard;