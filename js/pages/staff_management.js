"use strict";

var staffData; // 员工信息数据数组

function fnClickAddRow() {
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

function addUserInfor() {
  console.log('添加用户信息');
}

// 删除用户信息
function deleteUserInfro(event) {
  var checkList = $('input.test');
  var checkAry = [];
  for (var i = 0; i < checkList.length; i++) {
    if (checkList[i].checked) {
      checkAry.push(i + 1);
    }
  }
  if (checkAry.length > 0) {
    // 根据勾选情况动态显示不同的模态框
    $(event)[0].dataset.target = '#myModal_delete2';
  } else {
    $(event)[0].dataset.target = '#myModal_delete';
  }
}

// 编辑功能
function compile(event) {
  var checkList = $('input.test');
  var checkAry = [];
  for (var i = 0; i < checkList.length; i++) {
    if (checkList[i].checked) {
      checkAry.push(i + 1);
    }
  }
  if (checkAry.length > 0) {
    // 根据勾选情况动态显示不同的模态框
    $(event)[0].dataset.target = '#myModal_pencil2';
  } else {
    $(event)[0].dataset.target = '#myModal_pencil1';
  }
}