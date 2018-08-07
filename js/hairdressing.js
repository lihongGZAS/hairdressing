"user strict"

laydate.render({
  elem: '#select_time',
  istime: true
});

$(document).ready(function () {
  //获取后端数据，然后绑定到table上
  
  
});

// 生成美发清单
function createOrder() {

  var getData = [
    { member: 14545433, userName: 'JJ林', hairdress: '染发', hairdresser: '小龙',price: 64, date: '2018-08-07' }
  ];


  var tbodyHtml = '';
  for (var i = 0; i < getData.length; i++) {
    tbodyHtml += '<tr><td>' + getData[i].member + '</td>' +
      '<td>' + getData[i].userName + '</td>' +
      '<td>' + getData[i].hairdress + '</td>' +
      '<td>' + getData[i].hairdresser + '</td>' +
      '<td>' + getData[i].price + '</td>' +
      '<td>' + getData[i].date + '</td></tr>';
  }

  $('.dataTables-example').append(tbodyHtml);
  $('.dataTables-example').dataTable();
  console.log(3434)
}

function searchUserInfor() {
  console.log(9999);
  
  $.ajax({
    type: 'GET',
    url: '192.168.1.156:8080/hello/test',
    success: function (data) {
      console.log(data);
      $('#addCustomerDiv').remove(); // 添加前先把前一个元素移除，避免多次查询添加多个div
      var html = '';
      html += '<div class="row form-group col-sm-12" id="addCustomerDiv" style="height: 60px;line-height:60px;border:1px solid #7a7a7a;">' +
        '<label class="col-sm-1 control-label">会员姓名：</label></div>';
      $('#searchMember').after(html);
    },
    error: function (err) {
      alert(err.statusText);
    }
  });

  
}

