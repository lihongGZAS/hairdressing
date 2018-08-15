"use strict";

var staffData; // 员工信息数据数组

// 页面加载时发送数据请求
function getStaffData() {
  $.ajax({
    type: 'GET',
    url: '192.168.1.156:8080/hello/test',
    success: function (data) {
      console.log(data);
      staffData = data.staffData;
    },
    error: function (err) {
      console.log(err);
    }
  });
}

$(document).ready(function () {
  // 这里只是暂时模拟的数据
  staffData = [
    { member: 14545433, userName: 'JJ林', sexuality: '男', phoneNum: '13578645523', hairderssing: '理发'},
    { member: 14545435, userName: '周杰伦', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '染发'},
    { member: 14545437, userName: '王杰', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '理发'},
    { member: 14545439, userName: '费玉清', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '理发'},
    { member: 14545433, userName: 'JJ林', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '理发'},
    { member: 14545435, userName: '周杰伦', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '理发'},
    { member: 14545437, userName: '王杰', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '理发'},
    { member: 14545439, userName: '费玉清', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '理发'},
    { member: 14545433, userName: 'JJ林', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '理发'},
    { member: 14545435, userName: '周杰伦', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '理发'},
    { member: 14545437, userName: '王杰', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '理发'},
    { member: 14545439, userName: '费玉清', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '理发'},
    { member: 14545433, userName: 'JJ林', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '理发'},
    { member: 14545435, userName: '周杰伦', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '理发'},
    { member: 14545437, userName: '王杰', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '理发'},
    { member: 14545439, userName: '费玉清', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '理发'},
    { member: 14545433, userName: 'JJ林', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '理发'},
    { member: 14545435, userName: '周杰伦', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '理发'},
    { member: 14545437, userName: '王杰', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '烫发'},
    { member: 14545439, userName: '费玉清', sexuality: '男', phoneNum: '13578645523' ,hairderssing: '理发'},
  ];


  var tbodyHtml = '';
  for (var i = 0; i < staffData.length; i++) {
    tbodyHtml += '<tr><th><input type="checkbox" class="test"><td>' + staffData[i].member + '</td>' +
      '<td>' + staffData[i].userName + '</td>' +
      '<td>' + staffData[i].sexuality + '</td>' +
      '<td>' + staffData[i].phoneNum + '</td>' +
      '<td>' + staffData[i].hairderssing + '</td></tr>';
  }

  $('.dataTables-example').append(tbodyHtml);
  $('.dataTables-example').dataTable();
});

// 新增员工信息
function addStaffInfo() {
  console.log('添加新员工信息');
}

// 删除员工信息
function deleteStaffInfo(event) {
  var checkList = $('input.test');
  var checkAry = [];
  for (var i = 0; i < checkList.length; i++) {
    if (checkList[i].checked) {
      checkAry.push(i + 1);
    }
  }
  // 根据勾选情况动态显示不同的模态框
  if (checkAry.length > 0) {
    $(event)[0].dataset.target = '#staff_Modal_delete2';
  } else {
    $(event)[0].dataset.target = '#staff_Modal_delete';
  }
}

// 编辑员工基本信息
function compile(event) {
  var checkList = $('input.test');
  var checkAry = [];
  for (var i = 0; i < checkList.length; i++) {
    if (checkList[i].checked) {
      checkAry.push(i + 1);
    }
  }
  // 根据勾选情况动态显示不同的模态框
  if (checkAry.length > 0) {
    $(event)[0].dataset.target = '#staff_Modal_pencil2';
  } else {
    $(event)[0].dataset.target = '#staff_Modal_pencil1';
  }
}

// 导出美发师信息
function exportStaffInfo(event) {
  console.log(666);
  var checkList = $('input.test');
  var checkAry = [];
  for (var i = 0; i < checkList.length; i++) {
    if (checkList[i].checked) {
      checkAry.push(i + 1);
    }
  }
  // 根据勾选情况动态显示不同的模态框
  if (checkAry.length > 0) {
    $(event)[0].dataset.target = '#staff_Modal_export2';
  } else {
    $(event)[0].dataset.target = '#staff_Modal_export1';
  }
}