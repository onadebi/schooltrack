import React from 'react';
import ReactECharts from "echarts-for-react";
import FinanceChartData from '../app/data/FinanceChartData';

const FinanceChart: React.FC = () => {

const { INCOME, EXPENSES } = React.useMemo(() => {
    const incomeArray: number[] = [];
    const expensesArray: number[] = [];
    for(let i = 0; i < 12; i++) {
        const income = Math.floor(Math.random() * 100);
        incomeArray.push(income);
        expensesArray.push(Math.floor(Math.random() * 10));
    }
    return { INCOME: incomeArray, EXPENSES: expensesArray };
}, []);

const [financeData, setFinanceData] = React.useState<object>({});

React.useEffect(() => {
    setFinanceData(FinanceChartData(INCOME, EXPENSES));
}, [EXPENSES, INCOME]);

// Define event handlers
const onChartEvents = {
    'restore': () => {
        console.log('Chart has been restored to its original state.');
        setFinanceData(FinanceChartData(INCOME, EXPENSES));
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