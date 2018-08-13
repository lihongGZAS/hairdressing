'use strict';

var customerData; // 客户消费记录数据

$(function() {
  // 获取客户消费情况数据
  function getCustomerStatistical() {
    $.ajax({
      type: "GET",
      url: "192.168.1.156:8080/hello/test",
      success: function(data) {
        console.log(data);
        customerData = data.customerData;
      },
      error: function(err) {
        console.log(err);
      }
    });
  }
  // getCustomerStatistical();

  //获取后端数据，然后绑定到table上
  var getData = [
    {
      member: 14545433,
      userName: "JJ林",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 300
    },
    {
      member: 14545435,
      userName: "周杰伦",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 460
    },
    {
      member: 14545437,
      userName: "王杰",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 120
    },
    {
      member: 14545439,
      userName: "费玉清",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 1640
    },
    {
      member: 14545433,
      userName: "JJ林",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 60
    },
    {
      member: 14545435,
      userName: "周杰伦",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 20
    },
    {
      member: 14545437,
      userName: "王杰",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 120
    },
    {
      member: 14545439,
      userName: "费玉清",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 180
    },
    {
      member: 14545433,
      userName: "JJ林",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 120
    },
    {
      member: 14545435,
      userName: "周杰伦",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 140
    },
    {
      member: 14545437,
      userName: "王杰",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 160
    },
    {
      member: 14545439,
      userName: "费玉清",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 1280
    },
    {
      member: 14545433,
      userName: "JJ林",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 1200
    },
    {
      member: 14545435,
      userName: "周杰伦",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 180
    },
    {
      member: 14545437,
      userName: "王杰",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 260
    },
    {
      member: 14545439,
      userName: "费玉清",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 1780
    },
    {
      member: 14545433,
      userName: "JJ林",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 1240
    },
    {
      member: 14545435,
      userName: "周杰伦",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 1400
    },
    {
      member: 14545437,
      userName: "王杰",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 1240
    },
    {
      member: 14545439,
      userName: "费玉清",
      sex: '男',
      phoneNum: '13578906755',
      consumption: 1240
    }
  ];

  var tbodyHtml = "";
  for (var i = 0; i < getData.length; i++) {
    tbodyHtml += "<tr><td>" + getData[i].member + "</td>" +
      "<td>" + getData[i].userName + "</td>" +
      "<td>" + getData[i].sex + "</td>" +
      "<td>" + getData[i].phoneNum + "</td>" +
      "<td>" + getData[i].consumption + "</td></tr>";
  }

  $(".dataTables-example").append(tbodyHtml);
  $(".dataTables-example").dataTable();

  var pieChart = echarts.init(document.getElementById("echarts-pie-chart"));
  var pieOption = {
    title: {
      text: "上月客户美发占比",
      x: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      x: "10%",
      y: "20%",
      data: ["洗发", "理发", "染发", "烫发"]
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: 335, name: "理发" },
          { value: 310, name: "洗发" },
          { value: 234, name: "染发" },
          { value: 135, name: "烫发" }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };

  pieChart.setOption(pieOption);
  $(window).resize(pieChart.resize); // 页面放大缩小时，图表跟着缩放

  // 最近三个月的各个美发项目数量
  var barChart = echarts.init(document.getElementById("echarts-bar-chart"));
  var baroption = {
    title: {
      text: "过去三个月美发量"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["洗发", "理发", "染发", "烫发"]
    },
    grid: {
      x: 30,
      x2: 40,
      y2: 24
    },
    calculable: true,
    xAxis: [
      {
        type: "category",
        data: ["5月", "6月", "7月"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "洗发",
        type: "bar",
        data: [76.7, 135.6, 162.2],
        markPoint: {
          data: [
            { type: "max", name: "最大值" },
            { type: "min", name: "最小值" }
          ]
        },
        markLine: {
          data: [{ type: "average", name: "平均值" }]
        }
      },
      {
        name: "理发",
        type: "bar",
        data: [70.7, 175.6, 182.2],
        markPoint: {
          data: [
            { name: "最大值", type: "max" },
            { name: "最小值", type: "min" }
          ]
        },
        markLine: {
          data: [{ type: "average", name: "平均值" }]
        }
      },
      {
        name: "染发",
        type: "bar",
        data: [35, 46, 53],
        markPoint: {
          data: [
            { name: "最大值", type: "max" },
            { name: "最小值", type: "min" }
          ]
        },
        markLine: {
          data: [{ type: "average", name: "平均值" }]
        }
      },
      {
        name: "烫发",
        type: "bar",
        data: [24, 33, 27],
        markPoint: {
          data: [
            { name: "最大值", type: "max" },
            { name: "最小值", type: "min" }
          ]
        },
        markLine: {
          data: [{ type: "average", name: "平均值" }]
        }
      }
    ]
  };

  barChart.setOption(baroption);
  window.onresize = barChart.resize;
});
