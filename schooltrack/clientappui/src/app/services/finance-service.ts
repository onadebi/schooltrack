import { FinanceChartDataType } from "../data/FinanceChartData";

export default class FinanceService {
    getFinanceData = (): Promise <FinanceChartDataType[]>=>  {
         return new Promise((resolve) => resolve(financeData()));
    }
}


const financeData = (): FinanceChartDataType[] => {
    const objResp : FinanceChartDataType[] = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    for(let i = 0; i < 12; i++) {
        const financeData: FinanceChartDataType  ={
            income: Math.floor(Math.random() * 100),
            expenses: Math.floor(Math.random() * 10),
            months: months[i]
        };
        objResp.push(financeData);
    }
    return objResp;
};