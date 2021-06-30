import React from "react";

import Chartbar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const dataPointerValues = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  );
  const  totalMax = Math.max(...dataPointerValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <Chartbar
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
