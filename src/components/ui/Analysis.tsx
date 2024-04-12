import React from "react";
import Points from "./Points";
import MetaMaskConnect from "../wallet/MetaMaskConnect";

const Analysis: React.FC = () => {
    return (
        <div className="flex flex-col grow shrink-0 self-start mt-9 basis-0 w-fit max-md:max-w-full">
            <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
                <h1 className="flex-auto self-start mt-4 text-2xl font-bold leading-10 text-black">
                    <span className="text-orange-500">Analytics</span>{" "}
                    <span className="font-medium">Dashboard</span>
                </h1>
                <div className="flex gap-5">
                    <Points points={156847} />
                    <MetaMaskConnect />
                </div>
            </div>
        </div>
    );
};

export default Analysis;