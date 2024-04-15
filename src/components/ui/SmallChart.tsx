import React from "react";
import DonutChart from "./chart";

const SmallChart: React.FC = () => {
    return (
        <div className="flex flex-col  grow md:w-fit ml-5 max-md:ml-0">
            <section className="flex justify-center items-center flex-col px-3 pt-6 pb-14 mx-auto w-full font-bold bg-white rounded-3xl max-md:mt-8">
                <h2 className="self-center text-sm font-medium tracking-tight leading-6 text-slate-400">
                    Rented / Listed Percentage
                </h2>
                <div className="self-center mt-3.5 text-2xl tracking-tight leading-8 text-blue-950">
                    40%
                </div>
                <div className="shrink-0 mt-5 h-px border border-solid bg-zinc-200 border-zinc-200" />
                <div className="flex gap-5 self-center px-0.5 mt-6 max-w-full w-[182px]">
                    <div className="flex flex-col flex-1">
                        <div className="text-xs tracking-tight leading-7 text-slate-400">
                            Listed GPU
                        </div>
                        <div className="self-center mt-3.5 text-xl tracking-tight leading-8 text-blue-950">
                            65
                        </div>
                    </div>
                    <div className="flex flex-col flex-1">
                        <div className="text-xs tracking-tight leading-7 text-slate-400">
                            Rented GPU
                        </div>
                        <div className="self-center mt-3.5 text-xl tracking-tight leading-8 text-blue-950">
                            26
                        </div>
                    </div>
                </div>
                <div className="shrink-0 mt-8 h-px border border-solid bg-zinc-200 border-zinc-200" />
                <div className="flex flex-col items-center px-8 pt-7 mt-3 text-xs whitespace-nowrap text-zinc-400 max-md:px-5">
                    <div className="flex gap-5 justify-between px-px">
                        <div className="flex gap-2.5 justify-between">
                            <div className="shrink-0 my-auto w-2 bg-amber-200 rounded-md h-[9px]" />
                            <div>Listed</div>
                        </div>
                        <div className="flex gap-2.5 justify-between">
                            <div className="shrink-0 my-auto bg-orange-500 rounded-md h-[9px] w-[9px]" />
                            <div>Rented</div>
                        </div>
                    </div>
                    <DonutChart />
                </div>
           
            </section>
        </div>
    )
}

export default SmallChart;