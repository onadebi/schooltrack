import React from 'react';
import ReactECharts from "echarts-for-react";
import AttendanceData from '../app/data/AttendanceData';

const AttendanceChart = () => {
  const [attendanceData, setAttendanceData] = React.useState<object>({});
React.useEffect(() => {
  setAttendanceData(AttendanceData);
}, []);

const HandleChartClick = (params: {seriesName: string, name : string, value: number}) => {
  console.log('Clicked data:', params);
  const selectedData = {data: params.seriesName, dayOfWeek: params.name, value: params.value}
  console.info(`===>\nSelected data:`, selectedData, `\n===`);
};

// Chart events handler
const onEvents = {
  click: HandleChartClick
}


  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      <div className="flex justify-between items-center">
        <span className="capitalize">Attendance</span>
        <img src={'/images/moreDark.png'} alt='more' width={20} height={20} className='cursor-pointer' />
      </div>
       <div className="w-full">
        <ReactECharts option={attendanceData} onEvents={onEvents} />
      </div>
    </div>
  )
}

export default AttendanceChart;