import EChartsReact from 'echarts-for-react'
import React from 'react'

const PerformanceChart: React.FC = () => {

    const data = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '10%',
          left: 'center'
        },
        series: [
          {
            name: 'Semester review',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '70%'],
            // adjust the start and end angle
            startAngle: 180,
            endAngle: 360,
            data: [
              { value: 92, name: '1st Semester' },
              { value: 8, name: '2nd Semester' }
            ]
          }
        ],
        // graphic: {
        //   type: "image",
        //   left: "center",
        //   top: "55%",
        //   bottom: 90,
        //   z: -10,
        //   style: {
        //     image: "/images/singleAttendance.png",
        //     width: 40,
        //     height: 40,
        //     opacity: 0.75,
        //   },
        // },
      };
  return (
    <div className='bg-white rounded-md p-4 h-80'>
      <div className="flex items-center justify-between">
        <h1 className='text-xl font-semibold'>Performance</h1>
        <img src={`/images/moreDark.png`} alt='' width={16} height={16} />
      </div>
      <div className='relative'>
        <EChartsReact option={data} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-6px] text-center">
          <h1 className='text-3xl font-semibold'>9.2</h1>
          <p className='text-sm text-gray-500'>of 10 max</p>
        </div>
      </div>
    </div>
  )
}

export default PerformanceChart;