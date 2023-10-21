import { useState } from "react";
import Chevron from "../assets/icons/arrowDown.svg";
import Chart from "react-apexcharts";

const Graph = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
        ],
      },
      colors: ["#5679FF", "#101928"],
      dataLabels: {
        enabled: false,
      },
    },
    series: [
      {
        name: "series-1",
        data: [60, 40, 80, 70, 70, 50, 90, 91, 30, 70, 90],
      },
      {
        name: "series-2",
        data: [40, 20, 55, 60, 49, 80, 60, 80, 80, 90, 40],
      },
    ],
  });

  return (
    <div className="p-4 mt-10">
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl text-dark-gray font-semibold">
          Revenue
        </h1>
      </div>
      <div className="text-center mb-4">
        <span className="mr-2 h-2 w-2 bg-light-blue rounded-full inline-block"></span>
        <span className="text-xs md:text-sm font-semibold">Sales</span>
        <span className="ml-4 md:ml-8 mr-2 h-2 w-2 bg-black rounded-full inline-block"></span>
        <span className="text-xs md:text-sm font-semibold">Appointments</span>
      </div>
      <div className="text-center mb-4 md:mb-0">
        <h2 className="text-xs md:text-base text-gray-text font-normal">
          Last 12 Months
        </h2>
        <img src={Chevron} alt="arrow" className="w-3 h-3 inline-block" />
      </div>
      <div className="mb-4">
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="100%" // Make the chart width 100% for responsiveness
          height={320}
        />
      </div>
    </div>
  );
};

export default Graph;
