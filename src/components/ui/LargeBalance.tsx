import React from "react";

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const LargeBalance: React.FC = () => {
    return (
        <section className="flex flex-col px-8 py-6 mt-7 bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between w-full  max-md:max-w-full">
                <div className="flex flex-wrap gap-3.5 max-md:max-w-full">
                    <h2 className="grow my-auto sm:text-2xl font-bold tracking-tight leading-8 text-blue-950">
                        Daily GPoints Earning
                    </h2>
                    <div className="flex flex-auto sm:gap-5 justify-between items-start px-6 py-5 max-md:px-5 relative rounded-md overflow-hidden shadow-sm min-h-[73px] min-w-[286px] " >
                        <div className="bg-gradient-to-r from-[#F57E07] via-[#F8DC7A] to-white w-[70%] h-[2px]  absolute top-0 left-0" />
                        <div className="bg-gradient-to-b from-[#F57E07] via-[#F8DC7A] to-white w-[2px] h-full  absolute left-0 top-0" />
                        <div className="flex flex-col">
                            <div className="text-xs font-medium tracking-tight leading-5 text-slate-400">
                                Today
                            </div>
                            <div className="sm:text-2xl font-bold tracking-tight leading-8 text-blue-950">
                                590 GPoints
                            </div>
                        </div>
                        <div className="justify-center px-2 mt-6 text-xs font-bold tracking-tight leading-5 text-center text-teal-500 whitespace-nowrap bg-teal-500 bg-opacity-10 rounded-[58px]">
                            +2.45%
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 justify-between self-start mt-1.5 text-sm font-bold tracking-tight leading-6 whitespace-nowrap text-slate-400">
                    <div className="my-auto">Daily</div>
                </div>
            </div>
            <div className="flex gap-3.5 mt-7  max-md:max-w-full">
                <div className="flex flex-col self-start  text-sm leading-4 text-right text-gray-500 whitespace-nowrap ">
                    <div className="">6k</div>
                    <div className="mt-[26px]">5k</div>
                    <div className="mt-[26px]">4k</div>
                    <div className="mt-[26px]">3k</div>
                    <div className="mt-[26px]">2k</div>
                    <div className="mt-[26px]">1k</div>
                    <div className="mt-[26px]">0</div>
                </div>
                <div className="flex flex-col grow shrink-0 overflow-x-hidden basis-0 w-fit max-md:max-w-full relative">
                    {/* Background dotted lines */}
                    <div className="absolute inset-0 z-[0] ">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="absolute w-full border-dashed border-t-2 border-[#E5E5EF]" style={{ top: `${(index + 1) * (264.09 / 6)}px` }} />
                        ))}
                    </div>
                    {/* Graphical representation of GPoints earned each day */}
                    <div className="flex gap-5  max-md:pr-5 max-md:max-w-full justify-between relative z-10">
                        {Array.from({ length: 12 }).map((_, index) => {
                            const heights = [26.29, 81.32, 116, 26.29, 76.69, 116, 58.79, 32.78, 81.32, 26.29, 81.32, 116];
                            return (
                                <div key={index} className="flex flex-col h-[264.09px]">
                                    <div className="rounded-[2.59px] w-[8.61px] bg-[#E5E5EF]" style={{ height: `${264.09 - 1.5 - heights[index]}px` }} />
                                    <div className={`shrink-0 rounded-[2.59px] bg-gradient-to-b mt-1.5 from-[#F57E07] to-[#F8DC7A] w-[8.61px]`} style={{ height: `${heights[index]}px` }} />
                                </div>
                            );
                        })}
                    </div>
                    {/* Bottom border line */}
                    <div className="shrink-0 h-px border border-solid bg-slate-200 border-slate-200 max-md:max-w-full" />
                </div>
            </div>
            <div className="flex justify-between mt-6 mx-6 pr-4 w-full text-xs tracking-wider leading-3 text-center text-gray-500 uppercase whitespace-nowrap  ">
                {months.map((month) => (
                    <div key={month} className="">
                        {month}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default LargeBalance;