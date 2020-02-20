$(function(){
var $uname=$("#uname");
$uname.blur(function(){
  let a=vail.call(this,/^[A-Za-z0-9]{4,10}$/,"用户名必须介于4到10位!");
  var $span = $(this).next()
  if(a){
    $.ajax({
      url:"http://localhost:8080/pro/reg",
      data:{
        uname : $uname.val()
      },
      type :'get',
      dataType:"json",
      success:function(result){
        if(!result){
          $span.html("用户名可用")
        }else{
          $span.html("用户名已重复")
        }
      }
    })
  }
})

function vail(reg){
  var $txt=$(this);
  var $reg=reg;
  if($reg.test($txt.val())){
    // $span.html("<img src='image/ok.png'>")
    return true;
  }else{
    // $span.html(`<img src='image/err.png'>${info}`)
 		return false;
  }
}

var $upwd=$("#upwd");
$upwd.blur(function(){
  vail.call(this,/^[a-zA-Z]\w{5,17}$/)
})

var $uphone=$("#phone");
$uphone.blur(function(){
  let a= vail.call(this,/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/)

  var $span = $(this).next()
  if(a){
    $.ajax({
      url:"http://localhost:8080/pro/reg",
      data:{
        phone : $uphone.val()
      },
      type :'get',
      dataType:"json",
      success:function(result){
        if(!result){
          $span.html("手机号可用")
        }else{
          $span.html("手机号已重复")
        }
      }
    })
  }
})

var $pdd = $("#pdd")

$("#button").click(function(e){
  e.preventDefault();
  var bname=vail.call($uname,/^[A-Za-z0-9]{4,10}$/)
  var bupwd=vail.call($upwd,/^[a-zA-Z]\w{5,17}$/)
  var bphone=vail.call($uphone,/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/)
  var pdd = $pdd.prop("checked") ? true : alert("请勾选响应的服务条框")
  if(bname && bupwd && bphone && pdd){
    alert("提交成功");
  }else{
    if(!pdd){
      return
    }
    alert("提交失败");
  }
})

var $btn=$("#button");
    $btn.click(function(){
        //xhr四部曲
        $.ajax({
            url: 'http://localhost:8080/pro/reg',
            type :'post',
            data :{
                uname:$uname.val(),
                upwd:$upwd.val(),
                phone:$uphone.val()
            },
            dataType:'json',
            success:function(result){
              if(result==1){
                alert("登录成功")
              }else{
                alert("登录失败")
              }
            }
        })
    })

})

