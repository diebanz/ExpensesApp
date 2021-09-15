import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
    return (
        <div className="chart">
            {props.datePoints.map((datePoint) => (
                <ChartBar
                    key={datePoint.label}
                    value={datePoint.value}
                    maxValie={null}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
}

export default Chart;
