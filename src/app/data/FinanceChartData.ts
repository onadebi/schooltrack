import appsettings from "../../config/appsettings";

export type FinanceChartDataType = {
    income: number;
    expenses: number;
    months: string;
};

const FinanceChartData = (data : FinanceChartDataType[]) => {
    console.log('Finance Data: ', data);
    const INCOME = data.map((d) => d.income);
    const EXPENSES = data.map((d) => d.expenses);
    const MONTHS = data.map((d) => d.months);
    const options = {
        // title: {
        //   text: 'Finance Data'
        // },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            bottom: '0%',
            data: [
                { name: 'Income', icon: 'diamond' },
                { name: 'Expenses', icon: 'rect' },
            ],
            formatter: function (name: string) {
                if (name.startsWith('Income')) {
                    return `Income (Avg: ${(INCOME.reduce((sum, v) => sum + v, 0) / INCOME.length).toFixed(2)})`;
                }
                if (name.startsWith('Expenses')) {
                    return `Expense (Avg: ${(EXPENSES.reduce((sum, v) => sum + v, 0) / EXPENSES.length).toFixed(2)})`;
                }

                return name;
            }
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                restore: {},
                saveAsImage: {
                    name: `${appsettings.appName}-Finance_Chart`, // Custom name for the downloaded file
                }
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: MONTHS
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} °C'
            }
        },
        series: [
            {
                name: 'Income',
                type: 'line',
                data: INCOME,
                lineStyle: {
                    width: 4, // Make the line bolder
                    color: "#FAE27C" // Change the line color
                },
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
                markLine: {
                    data: [{ type: 'average', name: 'Avg' }]
                }
            },
            {
                name: 'Expenses',
                type: 'line',
                data: EXPENSES,
                lineStyle: {
                    width: 4,
                    color: "#FFA0A0"
                },
                markPoint: {
                    data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
                },
                markLine: {
                    data: [
                        { type: 'average', name: 'Avg' },
                        [
                            {
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            },
                            {
                                symbol: 'circle',
                                label: {
                                    position: 'start',
                                    formatter: 'Max'
                                },
                                type: 'max',
                                name: '最高点'
                            }
                        ]
                    ]
                }
            }
        ]
    }

    return options;
};


export default FinanceChartData;