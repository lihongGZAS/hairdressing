'use strict';

var staffData; // 员工近期服务记录数据

$(function() {
  // 获取客户消费情况数据
  function getCustomerStatistical() {
    $.ajax({
      type: "GET",
      url: "192.168.1.156:8080/hello/test",
      success: function(data) {
        console.log(data);
        staffData = data.staffData;
      },
      error: function(err) {
        console.log(err);
      }
    });
  }
  // getCustomerStatistical();

  // 获取后端数据，然后绑定到table上
  staffData = [
    { staffNum: 14545433, staffName: 'JJ林', sexuality: '男', phoneNum: '13578645523', commission: 200},
    { staffNum: 14545435, staffName: '周杰伦', sexuality: '男', phoneNum: '13578645523', commission: 120},
    { staffNum: 14545437, staffName: '王杰', sexuality: '男', phoneNum: '13578645523', commission: 260},
    { staffNum: 14545439, staffName: '费玉清', sexuality: '男', phoneNum: '13578645523', commission: 20},
    { staffNum: 14545433, staffName: 'JJ林', sexuality: '男', phoneNum: '13578645523', commission: 20},
    { staffNum: 14545435, staffName: '周杰伦', sexuality: '男', phoneNum: '13578645523', commission: 20},
    { staffNum: 14545437, staffName: '王杰', sexuality: '男', phoneNum: '13578645523', commission: 520},
    { staffNum: 14545439, staffName: '费玉清', sexuality: '男', phoneNum: '13578645523', commission: 620},
    { staffNum: 14545433, staffName: 'JJ林', sexuality: '男', phoneNum: '13578645523', commission: 320},
    { staffNum: 14545435, staffName: '周杰伦', sexuality: '男', phoneNum: '13578645523', commission: 820},
    { staffNum: 14545437, staffName: '王杰', sexuality: '男', phoneNum: '13578645523', commission:1020},
    { staffNum: 14545439, staffName: '费玉清', sexuality: '男', phoneNum: '13578645523', commission: 920},
    { staffNum: 14545433, staffName: 'JJ林', sexuality: '男', phoneNum: '13578645523', commission: 420},
    { staffNum: 14545435, staffName: '周杰伦', sexuality: '男', phoneNum: '13578645523', commission: 620},
    { staffNum: 14545437, staffName: '王杰', sexuality: '男', phoneNum: '13578645523', commission: 320},
    { staffNum: 14545439, staffName: '费玉清', sexuality: '男', phoneNum: '13578645523', commission: 220},
    { staffNum: 14545433, staffName: 'JJ林', sexuality: '男', phoneNum: '13578645523', commission: 120},
    { staffNum: 14545435, staffName: '周杰伦', sexuality: '男', phoneNum: '13578645523', commission: 720},
    { staffNum: 14545437, staffName: '王杰', sexuality: '男', phoneNum: '13578645523', commission: 820},
    { staffNum: 14545439, staffName: '费玉清', sexuality: '男', phoneNum: '13578645523', commission: 820}
  ];

  var tbodyHtml = '';
  for (var i = 0; i < staffData.length; i++) {
    tbodyHtml += '<tr><td>' + staffData[i].staffNum + '</td>' +
      '<td>' + staffData[i].staffName + '</td>' +
      '<td>' + staffData[i].sexuality + '</td>' +
      '<td>' + staffData[i].phoneNum + '</td>' + 
      '<td>' + staffData[i].commission + '</td></tr>';
  }

  $(".dataTables-example").append(tbodyHtml);
  $(".dataTables-example").dataTable();

  // var pieChart = echarts.init(document.getElementById("staff-pie-chart"));
  // var pieOption = {
  //   title: {
  //     text: "员工本月美发数量",
  //     x: "center"
  //   },
  //   tooltip: {
  //     trigger: "item",
  //     formatter: "{a} <br/>{b} : {c} ({d}%)"
  //   },
  //   legend: {
  //     orient: "vertical",
  //     x: "10%",
  //     y: "20%",
  //     data: ["洗发", "理发", "染发", "烫发"]
  //   },
  //   series: [
  //     {
  //       name: "访问来源",
  //       type: "pie",
  //       radius: "55%",
  //       center: ["50%", "60%"],
  //       data: [
  //         { value: 335, name: "理发" },
  //         { value: 310, name: "洗发" },
  //         { value: 234, name: "染发" },
  //         { value: 135, name: "烫发" }
  //       ],
  //       itemStyle: {
  //         emphasis: {
  //           shadowBlur: 10,
  //           shadowOffsetX: 0,
  //           shadowColor: "rgba(0, 0, 0, 0.5)"
  //         }
  //       }
  //     }
  //   ]
  // };

  // pieChart.setOption(pieOption);
  // $(window).resize(pieChart.resize); // 页面放大缩小时，图表跟着缩放

  // 最近三个月的各个美发项目数量
  var barChart = echarts.init(document.getElementById("staff-bar-chart"));
  var baroption = {
    title: {
      text: "本月美发量"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["理发", "染发", "烫发"]
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
        data: ["jack", "john", "Mary", 'lucy', 'iboy']
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "理发",
        type: "bar",
        data: [70, 175, 182, 66, 74],
        markPoint: {
          data: [
            { name: "最大值", type: "max" },
            { name: "最小值", type: "min" }
          ]
        }
      },
      {
        name: "染发",
        type: "bar",
        data: [35, 46, 53, 46, 24],
        markPoint: {
          data: [
            { name: "最大值", type: "max" },
            { name: "最小值", type: "min" }
          ]
        }
      },
      {
        name: "烫发",
        type: "bar",
        data: [24, 33, 27, 15, 32],
        markPoint: {
          data: [
            { name: "最大值", type: "max" },
            { name: "最小值", type: "min" }
          ]
        }
      }
    ]
  };

  barChart.setOption(baroption);
  window.onresize = barChart.resize;
});

