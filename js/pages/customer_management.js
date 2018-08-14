"use strict";

var customerData;

function fnClickAddRow() {
  $.ajax({
    type: 'GET',
    url: '192.168.1.156:8080/hello/test',
    success: function (data) {
      console.log(data);
      customerData = data.customers;
    },
    error: function (err) {
      console.log(err);
    }
  });
}

$(document).ready(function () {
  //获取后端数据，然后绑定到table上
  customerData = [
    { member: 14545433, userName: 'JJ林111', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545435, userName: '周杰伦', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545437, userName: '王杰', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545439, userName: '费玉清', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545433, userName: 'JJ林', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545435, userName: '周杰伦', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545437, userName: '王杰', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545439, userName: '费玉清', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545433, userName: 'JJ林', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545435, userName: '周杰伦', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545437, userName: '王杰', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545439, userName: '费玉清', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545433, userName: 'JJ林', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545435, userName: '周杰伦', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545437, userName: '王杰', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545439, userName: '费玉清', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545433, userName: 'JJ林', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545435, userName: '周杰伦', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545437, userName: '王杰', sexuality: '男', phoneNum: '13578645523' },
    { member: 14545439, userName: '费玉清', sexuality: '男', phoneNum: '13578645523' },
  ];


  var tbodyHtml = '';
  for (var i = 0; i < customerData.length; i++) {
    tbodyHtml += '<tr><th><input type="checkbox" class="test"><td>' + customerData[i].member + '</td>' +
      '<td>' + customerData[i].userName + '</td>' +
      '<td>' + customerData[i].sexuality + '</td>' +
      '<td>' + customerData[i].phoneNum + '</td></tr>';
  }

  $('.dataTables-example').append(tbodyHtml);
  $('.dataTables-example').dataTable();
});

function addUserInfo() {
  console.log('添加用户信息');
}

// 删除用户信息
function deleteUserInfo(event) {
  var checkList = $('input.test');
  var checkAry = [];
  for (var i = 0; i < checkList.length; i++) {
    if (checkList[i].checked) {
      checkAry.push(i + 1);
    }
  }
  // 根据勾选情况动态显示不同的模态框
  if (checkAry.length > 0) {
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
  // 根据勾选情况动态显示不同的模态框
  if (checkAry.length > 0) {
    $(event)[0].dataset.target = '#myModal_pencil2';
  } else {
    $(event)[0].dataset.target = '#myModal_pencil1';
  }
}

// 导出客户信息到Excel表
function exportUserInfo(event) {
  
  var checkList = $('input.test');
  var checkAry = [];
  for (var i = 0; i < checkList.length; i++) {
    if (checkList[i].checked) {
      checkAry.push(i + 1);
    }
  }
  console.log(checkAry);
  // 根据勾选情况动态显示不同的模态框
  if (checkAry.length > 0) {
    $(event)[0].dataset.target = '#myModal_export2';
    console.log('导出客户信息到Excel');
  } else {
    $(event)[0].dataset.target = '#myModal_export1';
  }
}
