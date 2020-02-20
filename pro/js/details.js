$(function(){
  // 封装一个函数,用于跳转页码
  function goPage(pno){
    $.ajax({
      url:'http://localhost:8080/pro/details',
      type:'get',
      data:{
        pno,
        pSize : 8
      },
      dataType:'json',
      success:function(result){
        $('.details').html("")
        //console.log(result)
        for(var i=0;i<result.length;i++){
          $(".details").append(`
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
        </div>
          `)
        }
      }
    })
  }
  goPage(1)
  // 为页码绑定事件,使用事件委托
  let $btn = $('.btn');
  $btn.on('click','li',function(e){
      let $li = $(e.target);
      if($li.html() == '上一页'){
        let li = $btn.find('.active');
        let $val = parseInt(li.html());
        if($val > 1){
          li.removeClass('active').prev().addClass('active');
          $val--;
          goPage($val);
        }
      }else if($li.html() == '下一页'){
        let li = $btn.find('.active');
        let val = parseInt(li.html());
        if(val < 5){
          li.removeClass('active').next().addClass('active');
          val++;
          goPage(val);
        }
      }else if(typeof parseInt($li.html()) == 'number'){
        $li.addClass('active').siblings().removeClass('active');
        goPage(parseInt($li.html()));
      } 
  })
})