const PRESENT = [];
const ABSENT = [];

for (let i = 0; i < 5; i++) {
  const present = Math.floor(Math.random() * 1000);
  if (present > 500) {
    PRESENT.push(present);
    ABSENT.push(1000 - PRESENT[i]);
  } else {
    ABSENT.push(present);
    PRESENT.push(1000 - ABSENT[i]);
  }
}

// Calculate the average absent value
const totalAbsent = ABSENT.reduce((a, b) => a + b, 0);
const averageAbsent = totalAbsent / ABSENT.length;
// Create an array with the average value for each day
// const averageAbsentData = new Array(ABSENT.length).fill(averageAbsent);


// Calculate the average present value
const totalPresent = PRESENT.reduce((a, b) => a + b, 0);
const averagePresent = totalPresent / PRESENT.length;
// Create an array with the average value for each day
const averagePresentData = new Array(PRESENT.length).fill(averagePresent);

const commonBarConfig = {
  type: 'bar',
  barWidth: '20%',
  itemStyle: {
    borderRadius: [6, 6, 0, 0] // Top-left and top-right corners rounded
  },
  emphasis: {
    focus: 'series'
  },
  // markLine: {
  //   lineStyle: {
  //     type: 'dashed'
  //   },
  //   data: [[{ type: 'min' }, { type: 'max' }]]
  // }
};

const AttendanceData = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    orient: 'horizontal', // Set the orientation of the legend
    left: 'center',       // Center the legend horizontally
    bottom: '0%',         // Position the legend at the bottom
    // data: [
    //   { name: 'Present' },
    //   { name: 'Absent' },
    //   { name: `Average Absent` } // Display average value
    // ],
    icon: 'rect',         // Change the legend symbol to a squared line
    // icon: 'circle'      // Uncomment to use a circle
    // icon: 'roundRect'   // Uncomment to use a rounded rectangle
    // icon: 'triangle'    // Uncomment to use a triangle
    // icon: 'diamond'     // Uncomment to use a diamond
    // icon: 'pin'         // Uncomment to use a map pin
    // icon: 'arrow'       // Uncomment to use an arrow
    // icon: 'none'        // Uncomment to use no icon
    // icon: 'path://M0,0 L10,10 L10,0 Z' // Uncomment to use a custom SVG path
    formatter: function (name: string) {
      if (name.startsWith('Average Absent')) {
        return `Average Absent: (${averageAbsent.toFixed(2)})`;
      }
      if(name.startsWith('Average Present')) {
        return `Average Present: (${averagePresent.toFixed(2)})`;
      }
      return name;
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '20%', // Adjust bottom to make space for the legend
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Present',
      data: PRESENT,
      ...commonBarConfig
    },
    {
      name: 'Absent',
      data: ABSENT,
      ...commonBarConfig
    },
    {
      name: 'Average Present',
      type: 'line',
      data: averagePresentData,
      color: 'green', // Optional: Customize the line color
      lineStyle: {
        type: 'dashed',
        color: 'rgeen' // Optional: Customize the line color
      },
      markLine: {
        silent: true,
        data: [
          {
            yAxis: averagePresent,
            label: {
              formatter: 'Average Present'
            }
          }
        ]
      }
    }
  ]
};

export default AttendanceData;