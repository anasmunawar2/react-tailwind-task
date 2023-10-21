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
      <div className="mb-6 flex items-center flex-col md:flex-row justify-between">
        <h1 className="text-2xl md:text-3xl text-dark-gray font-semibold md:mr-4">
          Revenue
        </h1>
        <div className="text-xs md:text-base text-gray-text font-normal flex items-center">
          <span className="mr-2 h-2 w-2 bg-light-blue rounded-full inline-block"></span>
          Sales
          <span className="ml-4 md:ml-8 mr-2 h-2 w-2 bg-black rounded-full inline-block"></span>
          Appointments
          <span className="md:ml-4">Last 12 Months</span>
          <img src={Chevron} alt="arrow" className="w-[31px] h-[31px] ml-2" />
        </div>
      </div>
      <div className="mb-4">
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="100%"
          height={320}
        />
      </div>
    </div>
  );
};

export default Graph;
