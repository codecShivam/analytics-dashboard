import React from "react";

const DonutChart: React.FC = () => {
    return (
        <div className="container mt-6 ">
            <div className="donut-chart-block  block">
                <div className="donut-chart">
                    <div id="part1" className="portion-block border-[16px]"><div className="circle"></div></div>
                    <div id="part2" className="portion-block border-[16px]"><div className="circle"></div></div>
                    <p className="center border-[16px]"></p>
                </div>
            </div>
        </div>
    )

}

export default DonutChart;