import React from 'react';
import ReactECharts from "echarts-for-react";
import FinanceChartData, { FinanceChartDataType } from '../app/data/FinanceChartData';
import { useAppStore } from '../app/services/appservices';

const FinanceChart: React.FC = () => {

const { financeService, commonService } = useAppStore();
const [financeData, setFinanceData] = React.useState<object>({});

const fetchFinanceData = React.useCallback(async () => {
    const startTime = performance.now(); // Start timing
    try {
      const data: FinanceChartDataType[] = await financeService.getFinanceData();
      const financeData = FinanceChartData(data);
      setFinanceData(financeData);
      const endTime = performance.now(); // End timing
      const fetchTime = endTime - startTime; // Calculate fetch time
      console.log(`Fetch time: ${fetchTime} ms`);
    } catch (error) {
      commonService.LogError('Error fetching finance data: ', (error as Error).message);
    }
  }, [financeService, commonService]);

  React.useEffect(() => {
    fetchFinanceData();
  }, [fetchFinanceData]);

  // Define event handlers
  const onChartEvents = {
    'restore': () => {
      console.log('Chart has been restored to its original state.');
      fetchFinanceData();
      // You can add more logic here, such as resetting state or triggering other UI changes
    },
    // You can handle more events here if needed
    // 'click': (params: any) => { console.log(params); },
  };

  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      <div className="flex justify-between items-center">
        <span className="capitalize">Finance Data</span>
        <img src={'/images/moreDark.png'} alt='more' width={20} height={20} className='cursor-pointer' />
      </div>
       <div className="w-full">
        <ReactECharts option={financeData} notMerge={true} 
                    lazyUpdate={true}
                    style={{ height: '400px', width: '100%' }}
                    onEvents={onChartEvents}/>
      </div>
    </div>
  )
}

export default FinanceChart;