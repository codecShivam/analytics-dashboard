import React from "react";

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const LargeBalance: React.FC = () => {
    return (
        <section className="flex flex-col px-8 py-6 mt-7 bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-3.5 max-md:flex-wrap max-md:max-w-full">
                    <h2 className="grow my-auto text-2xl font-bold tracking-tight leading-8 text-blue-950">
                        Daily GPoints Earning
                    </h2>
                    <div className="flex flex-auto gap-5 justify-between items-start px-6 py-5 bg-white rounded-lg border border-orange-500 border-solid shadow-2xl max-md:px-5">
                        <div className="flex flex-col">
                            <div className="text-xs font-medium tracking-tight leading-5 text-slate-400">
                                Today
                            </div>
                            <div className="mt-2.5 text-2xl font-bold tracking-tight leading-8 text-blue-950">
                                590 GPoints
                            </div>
                        </div>
                        <div className="justify-center px-2 py-0.5 mt-4 text-xs font-bold tracking-tight leading-5 text-center text-teal-500 whitespace-nowrap bg-teal-500 bg-opacity-10 rounded-[58px]">
                            +2.45%
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 justify-between self-start mt-1.5 text-sm font-bold tracking-tight leading-6 whitespace-nowrap text-slate-400">
                    <div className="my-auto">Daily</div>
                    
                </div>
            </div>
            <div className="flex gap-3.5 mt-7 max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col self-start text-sm leading-4 text-right text-gray-500 whitespace-nowrap max-md:hidden">
                    <div className="">6k</div>
                    <div className="mt-[26px]">5k</div>
                    <div className="mt-[26px]">4k</div>
                    <div className="mt-[26px]">3k</div>
                    <div className="mt-[26px]">2k</div>
                    <div className="mt-[26px]">1k</div>
                    <div className="mt-[26px]">0</div>
                </div>
                <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full justify-between">
                        {Array.from({ length: 12 }).map((_, index) => (
                            <div key={index} className="flex flex-col">
                                <div className="shrink-0 rounded-sm w-[8.61px] bg-slate-200 h-[264.09px]" />
                                <div className="shrink-0 rounded-sm " />
                            </div>
                        ))}
                    </div>
                    <div className="shrink-0 h-px border border-solid bg-slate-200 border-slate-200 max-md:max-w-full" />
                </div>
            </div>
            <div className="flex justify-between mt-6 mx-6 pr-4 w-full text-xs tracking-wider leading-3 text-center text-gray-500 uppercase whitespace-nowrap max-md:flex-wrap ">
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