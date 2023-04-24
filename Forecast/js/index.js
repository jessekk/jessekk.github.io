var colors = ["#5793f3", "#d14a61", "#675bba"];

option = {
  color: colors,
  tooltip: {
    trigger: "item",
    axisPointer: {
      type: "cross",
    },
  },
  legend: {
    data: [
      "农业和个体经营收入(亿元)",
      "劳务和家庭副业收入(亿元)",
      "政府补贴和救济金(亿元)",
    ],
    icon: "roundRect",
    textStyle: {
      color: "#de2910ff",
    },
  },
  grid: {
    top: 30,
    bottom: 60,
  },
  xAxis: [
    {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        color: "#de2910ff",
        interval: 0,
        fontSize: 12,
        rotate: 45,
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[1],
        },
      },
      axisPointer: {
        label: {
          show: false,
          formatter: function (params) {
            return (
              params.value +
              (params.seriesData.length ? "：" + params.seriesData[0].data : "")
            );
          },
        },
      },
      data: [
        "2020",
        "2022",
        "2024E",
        "2026E",
        "2028E",
        "2030E",
        "2032E",
        "2034E",
        "2036E",
        "2038E",
        "2040E",
        "2042E",
        "2044E",
        "2046E",
        "2048E",
        "2050E",
        "2052E",
        "2054E",
        "2056E",
        "2058E",
        "2060E",
      ],
    },
  ],
  yAxis: [
    {
      type: "value",
      max: 4500,
      axisLabel: {
        color: "#de2910ff",
        interval: 0,
        fontSize: 12,
        formatter: "{value}",
      },
      min: 0,
      splitLine: {
        show: false,
      },
      data: [1, 2, 3, 4, 5, 6, 7, 8],
    },
  ],
  series: [
    {
      name: "农业和个体经营收入(亿元)",
      type: "line",
      symbol: "circle",
      symbolSize: 15,
      smooth: true,
      itemStyle: {
        normal: {
          show: false,
          color: "#DC143C",
          opacity: 0,
        },
        emphasis: {
          color: "#DC143C",
        },
      },
      lineStyle: {
        normal: {
          color: "#DC143C",
        },
      },
      data: [
        2115.5, 2225.3, 2335.1, 2444.9, 2554.7, 2664.5, 2774.3, 2884.1, 2993.9,
        3103.7, 3213.5, 3323.3, 3433.1, 3542.9, 3652.7, 3762.5, 3872.3, 3982.1,
        4091.9, 4201.7, 4311.5,
      ],
    },
    {
      type: "line",
      name: "劳务和家庭副业收入(亿元)",
      symbol: "circle",
      symbolSize: 15,
      smooth: true,
      itemStyle: {
        normal: {
          show: false,
          color: "#7fffaa",
          opacity: 0,
        },
        emphasis: {
          color: "#7fffaa",
        },
      },
      lineStyle: {
        normal: {
          color: "#7fffaa",
        },
      },
      data: [
        1339.9, 1461.1, 1582.3, 1703.5, 1824.7, 1945.9, 2067.1, 2188.3, 2309.5,
        2430.7, 2551.9, 2673.1, 2794.3, 2915.5, 3036.7, 3157.9, 3279.1, 3400.3,
        3521.5, 3642.7, 3763.9,
      ],
    },
    {
      type: "line",
      name: "政府补贴和救济金(亿元)",
      symbol: "circle",
      symbolSize: 15,
      smooth: true,
      itemStyle: {
        normal: {
          color: "#ffbe0d",
          opacity: 0,
        },
        emphasis: {
          color: "#ffbe0d",
        },
      },
      lineStyle: {
        normal: {
          color: "#ffbe0d",
        },
      },
      data: [
        200.2, 219.7, 240.3, 262.1, 285.3, 309.9, 336.1, 364.0, 393.7, 425.3,
        458.9, 494.7, 532.8, 573.3, 616.4, 662.2, 710.9, 762.5, 817.3, 875.4,
        937.0,
      ],
    },
  ],
};

optionbtm = {
  color: colors,

  tooltip: {
    trigger: "item",
    axisPointer: {
      type: "cross",
    },
  },
  legend: {
    data: ["基础设施建设(亿元)", "教育资源配备(亿元)"],
    icon: "roundRect",
    textStyle: {
      color: "#de2910ff",
    },
  },
  grid: {
    top: 30,
    bottom: 60,
  },
  xAxis: [
    {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        color: "#de2910ff",
        interval: 0,
        fontSize: 12,
        rotate: 45,
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[1],
        },
      },
      axisPointer: {
        label: {
          show: false,
          formatter: function (params) {
            return (
              params.value +
              (params.seriesData.length ? "：" + params.seriesData[0].data : "")
            );
          },
        },
      },
      data: [
        "2020",
        "2022",
        "2024E",
        "2026E",
        "2028E",
        "2030E",
        "2032E",
        "2034E",
        "2036E",
        "2038E",
        "2040E",
        "2042E",
        "2044E",
        "2046E",
        "2048E",
        "2050E",
        "2052E",
        "2054E",
        "2056E",
        "2058E",
        "2060E",
      ],
    },
  ],
  yAxis: [
    {
      type: "value",
      max: 4500,
      axisLabel: {
        color: "#de2910ff",
        interval: 0,
        fontSize: 12,
        formatter: "{value}",
      },
      min: 1,
      splitLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: "基础设施建设(亿元)",
      type: "line",
      symbol: "circle",
      symbolSize: 15,
      smooth: true,
      itemStyle: {
        normal: {
          show: false,
          color: "#DC143C",
          opacity: 0,
        },
        emphasis: {
          color: "#DC143C",
        },
      },
      lineStyle: {
        normal: {
          color: "#DC143C",
        },
      },
      data: [
        1104.4, 1121.7, 1142.8666666666668, 1165.5, 1189.75, 1310.06, 1849.18,
        2290.86, 2640.38, 2953.98, 3153.52, 3329.56, 3491.28, 3648.96,
        3786.4066666666667, 3908.4466666666664, 4017.7633333333333,
        4106.3100000000004, 4168.486666666666, 4241.42, 4298.319999999999,
        4344.6133333333325,
      ],
    },
    {
      type: "line",
      name: "教育资源配备(亿元)",
      symbol: "circle",
      symbolSize: 15,
      smooth: true,
      itemStyle: {
        normal: {
          show: false,
          color: "#00eef8",
          opacity: 0,
        },
        emphasis: {
          color: "#00eef8",
        },
      },
      lineStyle: {
        normal: {
          color: "#00eef8",
        },
      },
      data: [
        1446.7, 1464.5, 1482.4, 1500.6, 1522.5, 1658.5, 2121.3, 2759.8, 2848.5,
        2925.9, 2965.4, 3029.3, 3121.1, 3228.2, 3355.1, 3502.1, 3654.6, 3800.5,
        3936.9, 4061.4, 4170.8, 4262.2, 4332.0,
      ],
    },
  ],
};

//中间的图
optioncenter = {
  color: colors,

  tooltip: {
    trigger: "item",
    axisPointer: {
      type: "cross",
    },
  },
  legend: {
    data: ["东部地区(百分比)", "中部地区(百分比)", "西部地区(百分比)"],
    icon: "roundRect",
    textStyle: {
      color: "#de2910ff",
    },
  },
  grid: {
    top: 30,
    bottom: 60,
  },
  xAxis: [
    {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        color: "#de2910ff",
        interval: 0,
        fontSize: 12,
        rotate: 45,
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[1],
        },
      },
      axisPointer: {
        label: {
          show: false,
          formatter: function (params) {
            return (
              params.value +
              (params.seriesData.length ? "：" + params.seriesData[0].data : "")
            );
          },
        },
      },
      data: ["2010", "2019", "2025E", "2050E"],
    },
  ],
  yAxis: [
    {
      type: "value",
      max: 50,
      axisLabel: {
        color: "#de2910ff",
        interval: 0,
        fontSize: 12,
        formatter: "{value}",
      },
      min: 1,
      splitLine: {
        show: false,
      },
      data: [1, 2, 3, 4, 5, 6, 7, 8],
    },
  ],
  series: [
    {
      name: "东部地区(百分比)",
      type: "line",
      symbol: "circle",
      symbolSize: 15,
      smooth: true,
      itemStyle: {
        normal: {
          show: false,
          color: "#ff00f8",
          opacity: 0,
        },
        emphasis: {
          color: "#ff00f8",
        },
      },
      lineStyle: {
        normal: {
          color: "#ff00f8",
        },
      },
      data: [11.4, 2.4, 0.2, 0.0],
    },
    {
      type: "line",
      name: "中部地区(百分比)",
      symbol: "circle",
      symbolSize: 15,
      smooth: true,
      itemStyle: {
        normal: {
          show: false,
          color: "#00eef8",
          opacity: 0,
        },
        emphasis: {
          color: "#00eef8",
        },
      },
      lineStyle: {
        normal: {
          color: "#00eef8",
        },
      },
      data: [35.4, 7.5, 0.8, 0.1],
    },
    {
      type: "line",
      name: "西部地区(百分比)",
      symbol: "circle",
      symbolSize: 15,
      smooth: true,
      itemStyle: {
        normal: {
          color: "#ffbe0d",
          opacity: 0,
        },
        emphasis: {
          color: "#ffbe0d",
        },
      },
      lineStyle: {
        normal: {
          color: "#ffbe0d",
        },
      },
      data: [46.2, 16.6, 1.6, 0.3],
    },
  ],
};
