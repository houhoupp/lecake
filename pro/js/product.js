$(function(){
  var arr = location.search.split('=');
  let d = decodeURI(arr[1])
  if(arr[0] == '?lid'){
    $.ajax({
      url:'http://localhost:8080/pro/find',
      type:'get',
      data:{
        did:d
      },
      dataType:'json',
      success:function(result){
        //console.log(result) 
        $(result).each((i,elm)=>{
          $(".findP").append(`
            <div class="pro_banner"> 
            <img src="${elm.lgpic}" alt="">
            </div>
            <div class="pro_details">
              <div class="details_left">
                <div class="left_1">
                  <p>${elm.dname}</p>
                  <span>¥${elm.price}</span>
                </div>
              <div class="left_2">
                <p>牛乳芝士蛋糕</p>
              </div>
              <div class="left_3">
                <p>开通仅¥99 预计可省¥358</p>
                <span>立即开通</span>
              </div>
            </div>
            <div class="details_right">
              <p>建议食用人数</p>
              <div class="right_1">
                <p>2-4人食</p>
                <p>5-8人食</p>
                <p>10-12人食</p>
                <p>15-20人食</p>
              </div>
              <div class="right_2">
                <p><img src="image/daoju.png" /> 含5套餐具</p>
                <p><img src="image/ben.png" /> 约 13 x 13 x 4 cm</p>
                <p><img src="image/bang.png"/> 约480g</p>
                <p>甜度: <img src="image/ttq.png" /><img src="image/ttq.png" /></p>
              </div>
              <hr>
              <div class="right_3">
                <a href="" class="addCart">加入购物车+</a>
                <a href="">立即购买</a>
              </div>
            </div>
          </div>
            `)
        })
      }
    })
  }else{
    $.ajax({
      url:"http://localhost:8080/pro/look",
      type:"get",
      data:{
        dname : d
      },
      dataType:"json",
      success:function(result){
        $(".findP").append(`
        <div class="pro_banner"> 
        <img src="${result.lgpic}" alt="">
        </div>
        <div class="pro_details">
          <div class="details_left">
            <div class="left_1">
              <p>${result.dname}</p>
              <span>¥${result.price}</span>
            </div>
          <div class="left_2">
            <p>牛乳芝士蛋糕</p>
          </div>
          <div class="left_3">
            <p>开通仅¥99 预计可省¥358</p>
            <span>立即开通</span>
          </div>
        </div>
        <div class="details_right">
          <p>建议食用人数</p>
          <div class="right_1">
            <p>2-4人食</p>
            <p>5-8人食</p>
            <p>10-12人食</p>
            <p>15-20人食</p>
          </div>
          <div class="right_2">
            <p><img src="image/daoju.png" /> 含5套餐具</p>
            <p><img src="image/ben.png" /> 约 13 x 13 x 4 cm</p>
            <p><img src="image/bang.png"/> 约480g</p>
            <p>甜度: <img src="image/ttq.png" /><img src="image/ttq.png" /></p>
          </div>
          <hr>
          <div class="right_3">
            <a href="" class="addCart">加入购物车+</a>
            <a href="">立即购买</a>
          </div>
        </div>
      </div>
        `)
      }
    })
  }
  
  // window.onload = function(){
  //   alert(1)
  //   console.dir($(".addCart"))
  // }
})