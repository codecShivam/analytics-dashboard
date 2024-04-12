import React from "react";
import StatCard from "../cards/StatCard";
import totalBalanceImage from "../../assets/totalBalance.png";
import avgOrderImage from "../../assets/avgOrder.png";
import avgRent from "../../assets/avgRent.png";
import graph from "../../assets/graph.png";

const statData = [
    {
        icon: totalBalanceImage,
        title: "Total Balance",
        value: "$350.40",
    },
    {
        icon: avgOrderImage,
        title: "Avg Order Value",
        value: "8 GPU's",
    }
];

const Status: React.FC = () => {
    return (
        <div className="flex gap-5 justify-between max-xl:flex-wrap">
            {statData.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
            <div className="flex items-center min-w-[332px] min-h-[97px]  py-1 px-4 md:py-3 md:pr-8 md:pl-5 bg-white rounded-3xl">
                <div className="w-12 h-12 md:w-[56px] mr-5 md:h-[56px] flex justify-center items-center bg-gradient-to-br from-[#F57E07] to-[#F8DC7A] rounded-full shadow-sm">
                    <img
                        loading="lazy"
                        src={avgRent}
                        alt="Avg Rent"
                        className="shrink-0 w-6 h-6 md:w-8 md:h-8 aspect-auto"
                    />
                </div>
                <div className="flex flex-col flex-grow">
                    <div className="text-xs md:text-sm font-medium tracking-tight leading-5 text-slate-400">
                        Avg Rent Duration
                    </div>
                    <div className="mt-1 text-lg md:text-2xl font-bold tracking-tight leading-6 text-blue-950">
                        3 Hours 38 Minutes
                    </div>
                </div>
                <div
                    className="main-container w-[55.319px] h-[31.208px] bg-cover bg-no-repeat  mb-3 -ml-6"
                    style={{ backgroundImage: `url(${graph})` }}
                />
            </div>
        </div>
    )
}

export default Status;