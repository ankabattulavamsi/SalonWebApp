export interface ChartData {
  series: any;
  options: any;
}

export const data: ChartData = {
  series: [
    {
      name: "",
      data: [
        5000, 4550, 3000, 7800, 5600, 4800, 3200, 4200, 5500, 5600, 4800, 3200, 4200, 5500,
        5000, 4550, 3000, 7800, 5600, 4800, 3200, 4200, 5500, 5600, 4800, 3200, 4200, 5500,
        4200, 5500,
      ],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 450,
      background: "rgb(231 163 86 / 20%)",

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        endingShape: "rounded",
        borderRadius: 11,
      

      },
    },
    colors: ["#E7A356","#9351e6","#51e68f","#e65166","#E7A356","#9351e6","#51e68f","#e65166"],

    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    },
    yaxis: {
      // min: 0,
      // max: 2000
      min: (min:any) => {
        console.log(`Min value: ${min}`);
        return min;
      },
      max: (max:any) => {
        console.log(`Max value: ${max}`);
        return max;
      }
    },
    fill: {
      opacity: 1,
      
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
        const se = series[0];
        let value = se.filter((e: any, i: any) => i === dataPointIndex);
        //  console.log("value",value);

        const la = w.globals.labels;
        const labe = la.filter((e: any, i: any) => i === dataPointIndex);
        //  console.log("! labe",labe);
        //  console.log(la,"lable");
        console.log(w, "wwwww");
        const op = "$" + value + labe.toString();

        //  console.log(se,"series");
        // console.log(seriesIndex,"seriesIndex");
        // console.log(dataPointIndex,"dataPointIndex");
        return (
          "<div style='background:#272522;width:99px;height:62px;border-radius:15px 15px 0px 15px;color:white;text-align:center;'>" +
          op +
          "</div>"
        );
      },
    },
  },
};
