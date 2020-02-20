$(function(){
  function goto(minHeight){
    //1.定义点击图标后滚动动画
    $(".goto").click(function(){
      $('html,body').animate({scrollTop:'0px'},'slow')
    })
    //2.获取最小高度值,无传入默认为600
    minHeight ? minHeight=minHeight : minHeight=600;
    //3.为窗口的scroll事件绑定事件处理函数
    $(window).scroll(function(){
      //4.获取窗口垂直滚动距离
      var s=$(window).scrollTop();
      //5.窗口滚动距离大于500显示,小于500隐藏
      if(s>minHeight){
        $(".goto").fadeIn(500);
      }else{
        $(".goto").fadeOut(500);
      }
    })
  }
  goto("");

  $.ajax({
    url: 'http://localhost:8080/pro/all',
    type: 'get',
    dataType: 'json',
    success:function(result){
      //console.log(result);
      for(var i=0;i<result.length;i++){
        $(".shopping").append(`
        <div>
          <div class=sp_tu>
            <a href="product.html?lid=${result[i].did}"><img src="${result[i].pic}" alt=""></a>
          </div>
          <div class=sp_zi1>
            <p>${result[i].title}</p>
          </div>
          <div class=sp_zi2>
            <a href="">${result[i].dname}</a>
          </div>
          <div class=sp_zi3>
            ${result[i].detail}
          </div>
          <div class=sp_zi4>
            ¥${result[i].price}
          </div>
        </div>`) ;
      }
    }
  })
})