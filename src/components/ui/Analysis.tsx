import React from "react";
import Points from "./Points";
import MetaMaskConnect from "../wallet/MetaMaskConnect";
import Status from "./Status";
import LargeBalance from "./LargeBalance";
import SmallChart from "./SmallChart";

const Analysis: React.FC = () => {
    return (
        <div className="flex sm:ml-24 flex-col grow shrink-0 self-start pt-9  w-fit max-md:max-w-full sm:px-12 px-4">
            <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
                <h1 className="flex-auto self-start mt-4 text-2xl font-bold leading-10 text-black">
                    <span className="text-orange-500">Analytics</span>{" "}
                    <span className="font-medium">Dashboard</span>
                </h1>
                <div className="flex shrink-0 gap-5">
                    <Points points={156847} />
                    <MetaMaskConnect />
                </div>
            </div>
            <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 justify-evenly  flex-wrap max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col items  max-md:ml-0 grow">
                        <Status />
                        <LargeBalance />
                    </div>
                    <SmallChart />
                </div>
            </div>
        </div>
    );
};

export default Analysis;