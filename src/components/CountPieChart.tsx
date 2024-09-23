import React from "react";
import ReactECharts from "echarts-for-react";
import ClientChartStats from "../app/models/dto/ClientChartStats";
import appsettings from "../config/appsettings";
import UserTypeEnum from "../app/models/dto/UserTypeEnum";
interface IProps{
    dataStats: ClientChartStats[];
}
const CountPieChart: React.FC<IProps> = ({dataStats}) => {

    const dataSum = dataStats.reduce((acc, curr) => acc + curr.value, 0);
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Users Data",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: dataStats,
      },
    ],
    graphic: {
      type: "image",
      left: "center",
      top: "center",
      z: -10, // Ensure the image is behind the pie chart
      style: {
        image: "/images/maleFemale.png",
        width: 50,
        height: 50,
        opacity: 0.75,
      },
    },
  };

  return (
    <section className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <span className="capitalize">{UserTypeEnum.Students}</span>
        <img src={'/images/maleFemale.png'} alt='more' width={20} height={20} className='cursor-pointer' />
      </div>
      <div className="w-full h-[75%]">
        <ReactECharts option={option} />
      </div>

      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        {dataStats && dataStats.map((data, index) => (
            <div key={index} className="flex flex-col gap-1">
                <div className="w-5 h-5 rounded-full" style={{background: `${index  %2===0 ?'#FAE27C': '#C3EBFA'}`}}/>
                <h1 className="font-bold">{appsettings.functions.NumberCommaFormat(data.value)}</h1>
                <h2 className="text-xs text-gray-300">{data.name} ({((data.value/dataSum)*100).toFixed(2)}%)</h2>
            </div>
        ))}
      </div>
    </section>
  );
};

export default CountPieChart;
