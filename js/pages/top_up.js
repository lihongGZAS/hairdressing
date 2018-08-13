"use strict"

var memberName; // 会员名
var members; // 会员卡号
var memberInfo = {}; // 查询得到的会员信息对象

// 日历控件
laydate.render({
  elem: '#top_up_time',
  istime: true,
});

$(document).ready(function () {
  var nowDate = new Date();
  var year = nowDate.getFullYear();
  var month = nowDate.getMonth() + 1;
  var date = nowDate.getDate();
  if(month < 10) {
    month = '0' + month;
  }
  if(date < 10) {
    date = '0' + date;
  }

  $('#top_up_time').val(year + '-' + month + '-' + date);
});

// 生成美发清单
function sureTopUp() {
  if(JSON.stringify(memberInfo) !== '{}') {
    topUpValue = $('#topUpValue').val();
    topUpDate = $('#top_up_time').val();
    $('.dataTables-example').children('tbody').remove(); // 移除tbody标签，每次都只生成一条充值记录

    var tbodyHtml = '';
    tbodyHtml += '<tr><td>' + members + '</td>' +
      '<td>' + memberName + '</td>' +
      '<td>' + topUpValue + '</td>' +
      '<td>' + topUpDate + '</td></tr>';

    $('.dataTables-example').append(tbodyHtml);
    $('.dataTables-example').dataTable();
  } else {
    alert('请先获取会员信息');
  }
}

// 根据会员卡号查询会员信息
function searchUserInfor() {

  // 查询返回的会员信息数据
  memberInfo = {members: 8975766841, memberName: 'jack', money: 100};
  members = memberInfo.members;
  memberName = memberInfo.memberName;

  // 添加前先把前一个元素移除，避免多次查询添加多个div
  $('#addCustomerDiv').remove(); 
  $('.dataTables-example').children('tbody').remove();
  var memberHtml = '';
  memberHtml += '<div class="row form-group col-sm-12" id="addCustomerDiv" style="height: 60px;line-height:60px;border-bottom:1px solid #7a7a7a;">' +
    '<label class="col-sm-1 col-lg-1 control-label">会员卡号：</label>' +  '<label class="col-sm-1 control-label">' + memberInfo.members + '</label>'+
    '<label class="col-sm-2 control-label">会员姓名：' + memberInfo.memberName + '</label>' + 
    '<label class="col-sm-2 control-label">卡上余额：￥' + memberInfo.money + '</label>' + '</div>';
  $('#searchMember').after(memberHtml);

  // $.ajax({
  //   type: 'GET',
  //   url: '192.168.1.156:8080/hello/test',
  //   success: function (data) {
  //     console.log(data);
  //     var memberInfo = {members: 8975766841, memberName: 'jack', money: 100}; // 暂时模拟的后台数据
  //     if(JSON.stringify(memberInfo) !== '{}') {
  //       members = memberInfo.members;
  //       memberName = memberInfo.memberName;

  //       $('#addCustomerDiv').remove(); // 添加前先把前一个元素移除，避免多次查询添加多个div
  //       var html = '';
  //       html += '<div class="row form-group col-sm-12" id="addCustomerDiv" style="height: 60px;line-height:60px;border-bottom:1px solid #7a7a7a;">' +
  //         '<label class="col-sm-2 control-label">会员卡号：' + members + '</label>' + 
  //         '<label class="col-sm-2 control-label">会员姓名：' + memberName + '</label>' + 
  //         '<label class="col-sm-2 control-label">卡上余额：' + money + '￥</label>' + '</div>';
  //       $('#searchMember').after(html);
  //     } else {
  //       $('#addCustomerDiv').remove(); // 添加前先把前一个元素移除，避免多次查询添加多个div
  //       var html = '<div class="row form-group clo-sm-12" style="height:60px;line-height:60px;border-bottom: 1px solid #7a7a7a;">' + 
  //         '<label>该会员不存在!</label></div>'; 
  //       $('#searchMember').after(html);
  //     }
  //   },
  //   error: function (err) {
  //     alert(err.statusText);
  //   }
  // });

  
}

