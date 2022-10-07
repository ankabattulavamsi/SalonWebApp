export interface ChartData {
  series: any;
  options: any;
}

export const data: ChartData = {
  series: [
    {
      name: "",
      data: [
        5000, 4550, 3000, 7400, 5600, 4800, 3200, 4200, 5500, 5600, 4800, 3200,
        4200, 5500, 5000, 4550, 3000, 7000, 5600, 4800, 3200, 4200, 5500, 5600,
        4800, 3200, 4200, 5500, 4200, 5500,
      ],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 450,
      toolbar: {
        show: true,
        tools: {
          download: false,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        endingShap: "flat",
        borderRadius: 5,
      },
    },

    colors: ["#E7A356"],

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
      min: (min: any) => {
        return min;
      },
      max: (max: any) => {
        return max;
      },
    },
    annotations: {
      position: "back",
      yaxis: [
        {
          label: {
            text: " ",
          },
          y: 0,
          y2: 7800,
          fillColor: "#E7A356",
          opacity: 0.1,
        },
      ],
    },
    fill: {
      colors: ["#E7A356"],
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          {
            offset: 0,
            color: "#F8CD9B",
            opacity: 1,
          },
          {
            offset: 100,
            color: "rgba(246, 221, 192, 0.32)",
            opacity: 1,
          },
        ],
      },
    },

    tooltip: {
      custom: function ({ series, dataPointIndex, w }: any) {
        const se = series[0];
        let value = se.filter((e: any, i: any) => i === dataPointIndex);
        // console.log("value", value);

        const la = w.globals.labels;
        const labe = la.filter((e: any, i: any) => i === dataPointIndex);
        // console.log("! labe", labe);
        //  console.log(la,"lable");
        // console.log(w, "wwwww");
        // const op = "$" + value + labe.toString();

        //  console.log(se,"series");
        // console.log(seriesIndex,"seriesIndex");
        // console.log(dataPointIndex, "dataPointIndex");
        return (
          "<div style='background:#272522;width:99px;height:62px;border-radius:15px 15px 0px 15px;color:white;display:flex;flex-direction: column;justify-content:space-evenly;align-items:center;'>" +
          "<span style='font-family: Fira Sans;font-style: normal;font-weight: 500;font-size: 18px;text-transform: capitalize;letter-spacing: 1px; '>" +
          "₹" +
          value +
          "</span>" +
          "<span style='font-family: Fira Sans;font-style: normal;font-weight: 500;font-size: 14px;text-transform: capitalize;color: #E7A356;letter-spacing: 1px; '>" +
          labe.toString() +
          "Jan" +
          "</span>" +
          "</div>"
        );
      },
      theme: "primary.dark",
    },
  },
};
