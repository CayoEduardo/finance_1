import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart: React.FC = ({ values }) => {
  const [options] = useState<ApexOptions>({
    chart: {
      type: "donut",
    },
    colors: ["#cf1919", "#1f81e2", "#40f740"],
    legend: {
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 7,
      },
    },
    labels: ["CDB", "Tesouro Direto", "LCI"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          labels: {},
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={values} type="donut" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
