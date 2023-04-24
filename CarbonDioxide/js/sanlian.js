// 路径配置
require.config({
  paths: {
    echarts: "https://echarts.baidu.com/build/dist",
  },
});
var nodes = [];
var links = [];
var constMaxDepth = 2;
var constMaxChildren = 7;
var constMinChildren = 4;
var constMaxRadius = 10;
var constMinRadius = 2;

nodes = [
  //展示的节点
  {
    name: "脱贫攻坚", //节点名称
    value: 63,
    category: 3, //与关系网类别索引对应，此处只有一个关系网所以这里写0
    depth: 0,
    id: 0,
  },
  {
    name: "攻坚方法",
    value: 40,
    category: 2,
    depth: 1,
    id: 1,
  },
  {
    name: "攻坚成果",
    value: 40,
    category: 2,
    depth: 2,
    id: 2,
  },
  {
    name: "未来目标",
    value: 40,
    category: 2,
    depth: 2,
    id: 3,
  },
  {
    name: "因地制宜",
    value: 30,
    category: 1,
    depth: 1,
    id: 4,
  },
  {
    name: "教育发展",
    value: 30,
    category: 1,
    depth: 1,
    id: 5,
  },
  {
    name: "资金汇入",
    value: 30,
    category: 1,
    depth: 3,
    id: 6,
  },
  {
    name: "全面脱贫",
    value: 30,
    category: 1,
    depth: 1,
    id: 7,
  },
  {
    name: "全面摘帽",
    value: 30,
    category: 1,
    depth: 1,
    id: 8,
  },
  {
    name: "全面小康",
    value: 30,
    category: 1,
    depth: 1,
    id: 9,
  },
  {
    name: "持续发展",
    value: 30,
    category: 1,
    depth: 1,
    id: 10,
  },
  {
    name: "乡村振兴",
    value: 30,
    category: 1,
    depth: 1,
    id: 11,
  },
  {
    name: "种植业",
    value: 23,
    category: 0,
    depth: 1,
    id: 12,
  },
  {
    name: "养殖业",
    value: 23,
    category: 0,
    depth: 2,
    id: 13,
  },
  {
    name: "食品加工",
    value: 23,
    category: 0,
    depth: 2,
    id: 14,
  },
  {
    name: "开设教育",
    value: 23,
    category: 0,
    depth: 2,
    id: 15,
  },
  {
    name: "对口支援",
    value: 23,
    category: 0,
    depth: 2,
    id: 16,
  },
  {
    name: "低保政策",
    value: 23,
    category: 0,
    depth: 2,
    id: 17,
  },
  {
    name: "建档立卡",
    value: 23,
    category: 0,
    depth: 2,
    id: 18,
  },
  {
    name: "开设工厂",
    value: 23,
    category: 0,
    depth: 2,
    id: 19,
  },
  {
    name: "旅游发展",
    value: 23,
    category: 0,
    depth: 3,
    id: 20,
  },
  {
    name: "农业新装备",
    value: 23,
    category: 0,
    depth: 0,
    id: 21,
  },
  {
    name: "农业科技",
    value: 23,
    category: 0,
    depth: 3,
    id: 22,
  },
  {
    name: "组织振兴",
    value: 23,
    category: 0,
    depth: 3,
    id: 23,
  },
  {
    name: "生态振兴",
    value: 23,
    category: 0,
    depth: 3,
    id: 24,
  },
  {
    name: "文化振兴",
    value: 23,
    category: 0,
    depth: 3,
    id: 25,
  },
  {
    name: "人才振兴",
    value: 23,
    category: 0,
    depth: 3,
    id: 26,
  },
  {
    name: "产业振兴",
    value: 23,
    category: 0,
    depth: 3,
    id: 27,
  },
];
links = [
  //节点之间连接
  {
    source: 0, //起始节点，0表示第一个节点
    target: 1,
    weight: 9,
  },
  {
    source: 0,
    target: 2,
  },
  {
    source: 0, //起始节点，0表示第一个节点
    target: 3,
    weight: 9,
  },
  {
    source: 1,
    target: 4,
  },
  {
    source: 1,
    target: 5,
  },
  {
    source: 1,
    target: 6,
  },
  {
    source: 2,
    target: 7,
  },
  {
    source: 2,
    target: 8,
  },
  {
    source: 2,
    target: 9,
  },
  {
    source: 3,
    target: 10,
  },
  {
    source: 3,
    target: 11,
  },
  {
    source: 4,
    target: 12,
  },
  {
    source: 4,
    target: 13,
  },
  {
    source: 4,
    target: 14,
  },
  {
    source: 5,
    target: 15,
  },
  {
    source: 5,
    target: 16,
  },
  {
    source: 6,
    target: 17,
  },
  {
    source: 6,
    target: 18,
  },
  {
    source: 6,
    target: 19,
  },
  {
    source: 10,
    target: 20,
  },
  {
    source: 10,
    target: 21,
  },
  {
    source: 10,
    target: 22,
  },
  {
    source: 11,
    target: 23,
  },
  {
    source: 11,
    target: 24,
  },
  {
    source: 11,
    target: 25,
  },
  {
    source: 11,
    target: 26,
  },
  {
    source: 11,
    target: 27,
  },
];
for (var i = 0; i < nodes.length; i++) {
  if (nodes[i].id == "0") {
    nodes[i].itemStyle = {
      normal: {
        borderColor: "#000",
        color: "blue",
        label: {
          show: true,
        },
      },
    };
  } else if (nodes[i].id == "22") {
    nodes[i].itemStyle = {
      normal: {
        label: {
          show: true,
          textStyle: {
            color: "yellow",
          },
        },
      },
    };
  }
  //22
  nodes[i]["symbolSize"] = nodes[i].value * 1.2;
}
console.log(nodes);
require([
  "echarts",
  "echarts/chart/force", // 使用柱状图就加载bar模块，按需加载
], function (ec) {
  // 基于准备好的dom，初始化echarts图表
  var guanxi = ec.init(document.getElementById("guanxi"));
  option3 = {
    title: {
      x: "right",
      y: "bottom",
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}",
    },
    toolbox: {
      show: true,
      feature: {
        restore: { show: true },
        //  magicType: {show: true, type: ['force', 'chord']},
        saveAsImage: { show: true },
      },
    },
    legend: {
      x: "left",
      data: ["四级", "三级", "二级"],
      orient: "left",
      x: 10,
      y: 10,
      textStyle: {
        fontSize: "14",
        color: "#de2910ff",
      },
    },
    series: [
      {
        type: "force",
        name: "Force tree",
        ribbonType: false,
        categories: [
          {
            name: "四级",
          },
          {
            name: "三级",
          },
          {
            name: "二级",
          },
        ],
        itemStyle: {
          normal: {
            label: {
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
            nodeStyle: {
              brushType: "both",
              borderColor: "rgba(255,215,0,0.6)",
              borderWidth: 1,
            },
          },
        },
        minRadius: constMinRadius,
        maxRadius: constMaxRadius,
        symbolSize: function (params) {
          console.log(params);
        },
        coolDown: 0.995,
        steps: 10,
        nodes: nodes,
        links: links,
        steps: 1,
      },
    ],
  };
  console.log(option3);
  guanxi.setOption(option3);
});
