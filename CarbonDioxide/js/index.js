// 折线图
var colors = [
  "#0997c1",
  "#c22167",
  "#082773",
  "#604fb9",
  "#0067c3",
  "#68cdfb",
  "#5793f3",
  "#d14a61",
  "#675bba",
];

//碳交易行情
option1 = {
  color: colors,

  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
  },
  grid: {
    right: "20%",
  },
  legend: {
    data: ["河南", "四川", "河北", "云南", "贵州", "青海", "西藏", "其他"],
    textStyle: {
      color: "#fff",
    },
    orient: "left",
    x: "right",
    textStyle: {
      fontSize: "14",
      color: "#de2910ff",
    },
  },
  xAxis: [
    {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      data: [
        "2015/1/1",
        "2015/4/1",
        "2015/7/1",
        "2015/10/1",
        "2016/1/1",
        "2016/4/1",
        "2016/7/1",
        "2016/10/1",
        "2017/1/1",
        "2017/4/1",
        "2017/7/1",
        "2017/10/1",
        "2018/1/1",
        "2018/4/1",
        "2018/7/1",
        "2018/10/1",
        "2019/1/1",
        "2019/4/1",
        "2019/7/1",
        "2019/10/1",
        "2020/1/1",
        "2020/4/1",
        "2020/7/1",
        "2020/10/1",
        "2021/1/1",
        "2021/4/1",
        "2021/7/1",
        "2021/10/1",
        "2022/1/1",
        "2022/4/1",
      ],
      axisLabel: {
        formatter: "{value}",
        color: "#0c0f2b",
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "贫困人口(万人)",
      min: 0,
      max: 600,
      position: "left",
      axisLine: {
        lineStyle: {
          color: colors[0],
        },
      },
      axisLabel: {
        formatter: "{value}",
        color: "#0c0f2b",
      },
      splitLine: {
        show: true,
        lineStyle: {
          // 属性lineStyle（详见lineStyle）控制线条样式
          color: "rgba(255, 255, 255, 0)",
        },
      },
    },
    {
      type: "value",
      name: "降水量",
      show: false,
    },
    {
      type: "value",
      name: "温度",
      show: false,
    },
  ],
  series: [
    {
      name: "河南",
      type: "line",
      yAxisIndex: 2,
      data: [
        576, 539.5, 503, 466.5, 430, 401.85, 373.7, 345.55, 317.4, 307.3, 297.2,
        287.1, 277, 233.8, 190, 147.4, 104.3, 87.1, 69.9, 52.7, 35.5, 26.7,
        17.8, 8.9, 0, 0, 0, 0, 0, 0,
      ],
    },
    {
      name: "四川",
      type: "line",
      yAxisIndex: 2,
      data: [
        509, 476.75, 444.5, 412.25, 380, 353.25, 326.5, 299.75, 271, 245, 219,
        193, 171, 145, 119, 93, 67, 55.25, 43.5, 31.75, 20, 15, 10, 5, 0, 0, 0,
        0, 0, 0,
      ],
    },
    {
      name: "河北",
      type: "line",
      yAxisIndex: 2,
      data: [
        320, 299.25, 274.5, 259.75, 241, 227.75, 214.5, 201.25, 188, 172, 156,
        140, 124, 106.8, 89.6, 72.4, 55.2, 42.25, 29.3, 16.35, 3.4, 2.55, 1.7,
        0.85, 0, 0, 0, 0, 0, 0,
      ],
    },
    {
      name: "云南",
      type: "line",
      yAxisIndex: 2,
      data: [
        574, 548.25, 522.5, 496.75, 471, 446.5, 422, 397.5, 373, 394.5, 326,
        302.5, 279, 254, 229, 204, 179, 144.8, 110.6, 76.4, 42.2, 31.0, 15.9, 0,
        0, 0, 0, 0, 0, 0,
      ],
    },
    {
      name: "贵州",
      type: "line",
      yAxisIndex: 2,
      data: [
        623, 590.5, 558, 525.5, 493, 470.25, 447.85, 424.75, 402, 371.5, 341,
        310.5, 280, 243.08, 206.16, 173.2, 132.32, 104.82, 77.32, 9.82, 22.32,
        16.84, 11.66, 5.43, 0, 0, 0, 0, 0, 0,
      ],
    },
    {
      name: "青海",
      type: "line",
      yAxisIndex: 2,
      data: [
        52, 49.4, 47.3, 44.9, 42, 39.54, 36.59, 34.16, 31, 28.69, 27.1, 25.6,
        23, 19.65, 16.48, 13.16, 10, 8.66, 7.45, 6.12, 5, 3.4, 2.4, 0.8, 0, 0,
        0, 0, 0, 0,
      ],
    },
    {
      name: "西藏",
      type: "line",
      yAxisIndex: 2,
      data: [
        61, 57.64, 54.26, 51.36, 48, 44.62, 41.03, 37.48, 34, 30.21, 26.35,
        23.48, 20, 18.12, 16.54, 14.68, 13, 10.6, 7.16, 5.03, 4, 3.1, 2.3, 1.1,
        0, 0, 0, 0, 0, 0,
      ],
    },
    // {
    //   name: "其他",
    //   type: "line",
    //   yAxisIndex: 2,
    //   data: [
    //     4908, 4508, 4006, 3560, 3291, 2964.3, 2745.2, 2631.2, 2586.5, 2245.9,
    //     2064.5, 1920.6, 1861, 1624.6, 1413.6, 1263.02, 1092.18, 832.1, 655.6,
    //     492.12, 387.48, 290.61, 193.74, 96.78, 0, 0, 0, 0, 0, 0,
    //   ],
    // },
  ],
};

///饼图
option2 = {
  title: {
    text: "合计",
    textStyle: {
      color: "#fff",
    },
    subtext: "5575",
    subtextStyle: {
      color: "#fff",
      fontSize: 18,
    },
    x: "center",
    y: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{c}",
  },
  legend: {
    show: true,
    y: "top",
    data: ["河南", "四川", "河北", "云南", "贵州", "青海", "西藏", "其他"],
    orient: "left",
    x: 0,
    y: 0,
    textStyle: {
      fontSize: "14",
      color: "#de2910ff",
    },
  },
  calculable: true,
  series: [
    {
      color: ["#0997c1", "#c22167", "#082773", "#604fb9", "#0067c3", "#68cdfb"],
      type: "pie",
      radius: [50, 200],
      center: ["50%", "50%"],
      label: {
        normal: {
          color: "#de2910ff",
        },
      },
      tooltip: {
        formatter: function (params) {
          var b = parseFloat(params.value).toString();
          var len = b.length;
          if (len <= 3) {
            return b;
          }
          var r = len % 3;
          var aNew = b.split(".")[1];
          return r > 0
            ? b.slice(0, r) +
                "," +
                b.slice(r, len).match(/\d{3}/g).join(",") +
                "." +
                aNew
            : b.slice(r, len).match(/\d{3}/g).join(",");
        },
      },
      itemStyle: {
        normal: {},
      },
      data: [
        { value: 430, name: "河南" },
        { value: 380, name: "四川" },
        { value: 399, name: "河北" },
        { value: 471, name: "云南" },
        { value: 493, name: "贵州" },
        { value: 52, name: "青海" },
        { value: 59, name: "西藏" },
        { value: 3291, name: "其他" },
      ],
    },
  ],
};

option22 = {
  title: {
    text: "合计",
    subtext: "0",
    subtextStyle: {
      color: "#fff",
      fontSize: 18,
    },
    textStyle: {
      color: "#fff",
      verticalAlign: "top",
    },
    x: "center",
    y: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{c}",
  },
  legend: {
    show: true,
    y: "top",
    data: ["河南", "四川", "河北", "云南", "贵州", "青海", "西藏", "其他"],
    orient: "top",
    x: 0,
    y: 0,
    textStyle: {
      fontSize: "14",
      color: "#de2910ff",
    },
  },
  calculable: true,
  series: [
    {
      color: ["#0997c1", "#c22167", "#082773", "#604fb9", "#0067c3", "#68cdfb"],
      type: "pie",
      radius: [50, 200],
      center: ["50%", "50%"],
      label: {
        normal: {
          color: "#de2910ff",
        },
      },
      tooltip: {
        formatter: function (params) {
          var b = parseFloat(params.value).toString();
          var len = b.length;
          if (len <= 3) {
            return b;
          }
          var r = len % 3;
          var aNew = b.split(".")[1];
          return r > 0
            ? b.slice(0, r) +
                "," +
                b.slice(r, len).match(/\d{3}/g).join(",") +
                "." +
                aNew
            : b.slice(r, len).match(/\d{3}/g).join(",");
        },
      },
      itemStyle: {
        normal: {},
      },
      data: [
        { value: 0, name: "河南" },
        { value: 0, name: "四川" },
        { value: 0, name: "河北" },
        { value: 0, name: "云南" },
        { value: 0, name: "贵州" },
        { value: 0, name: "青海" },
        { value: 0, name: "西藏" },
        { value: 0, name: "其他" },
      ],
    },
  ],
};
