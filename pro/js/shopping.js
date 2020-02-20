$(function(){
  new Promise((resolve,reject)=>{
    $.ajax({
      url:"http://localhost:8080/pro/all",
      type:"get",
      dataType:"json",
      success:function(result){
        $(result).each((i,elm)=>{
          $(".shop").append(`
            <div class="shop_product" data-i="${elm.did}-${elm.pic}-${elm.dname}-${elm.price}-${elm.count}">
              <div class="shop_img">
                <a href="product.html?lid=${elm.did}"><img src="${elm.pic}" alt=""></a>
              </div>
              <div class="shop_font">
                <p>${elm.dname}</p>
                <span>${elm.title}</span>
              </div>
              <p>¥${elm.price}</p>
              <span class="addshop">加入购物车&gt;</span>
            </div>
          `)
        })
        resolve()
      }
    })
  }).then(()=>{
    return new Promise((resolve,reject)=>{
      load();
      // 获取本地数据
      let arr =getDate();
      var addshop = $(".addshop");
      addshop.click(function(){
        // 找这个按钮的父元素,他的data-i相关的信息,判断他的did是否在对应的本地缓存中
        let arr1= $(this).parent('.shop_product').attr('data-i').split('-');
        let obj ={
          did : arr1[0],
          pic : arr1[1],
          dname : arr1[2],
          price : arr1[3],
          count : 1
        }
        // 初始值为true，表示要添加到对应的本地缓存中
        let bool = true
        // 数组遍历
        $(arr).each((i,ele)=>{
            if(obj.did == ele.did){
              ele.count++;
              bool = false;
              return
            }
        })
        // 判断
        if(bool){
          arr.push(obj)
        }
        // 如果有就找到对应的对数量加一 没有的话就直接push到对应的本地缓存中
        saveDate(arr)
        //将本地存储数据渲染到页面上
        load();
      })

      //读取本地存储的数据
      function getDate(){
        var data = localStorage.getItem("shop");
        if(data !== null){
          return JSON.parse(data)
        }else{
          return [];
        }
      }

      //保存到本地存储
      function saveDate(data){
        localStorage.setItem("shop",JSON.stringify(data));
      }
      
      //删除勾选中的商品
      var del = $(".del");
      del.click(function(){
        if($(".input:checked").length == 0){
          alert("请选择您要删除的商品");
        }else{
          let del =$(".cart_details").find('.input:checked').parent().parent().attr('data-i')
          console.log(del)
          var arr1= del.split('-');
          var obj ={
            did : arr1[0],
            pic : arr1[1],
            dname : arr1[2],
            price : arr1[3],
            count : 1
          }
          dels(obj)
          $(".cart_details").find(".input:checked").parent().parent().remove();
        }
      })

      // 删除数据
      function dels(obj){
        var arrs =getDate();
        for(var i in arrs){
          if(arrs[i].did == obj.did){
            // 找到此时在localstorage里面的数据,删除掉
            arrs.splice(i,1)
            saveDate(arrs)
            return
          }
        }
      }
      //渲染加载数据
      function load(){
        var data = getDate();
        //遍历前清空数据
        $(".cart_shop").empty();
        //遍历元素渲染页面
        $.each(data,(i,elm)=>{
          $(".cart_shop").append(`
          <div class="cart_details" data-i="${elm.did}-${elm.pic}-${elm.dname}-${elm.price}-${elm.count}">
          <div class="cart_icon">
            <input type="checkbox" class="input">
          </div>
          <div class="cart_product">
            <a href="javascript:;">
              <img src="${elm.pic}" alt="">
            </a>
            <div class="cart_p1">
              <p>${elm.dname}</p>
              <p>2-4人食</p>
              <p class="price">¥${elm.price}</p>
            </div>
            <div class="cart_p2">
              <p class="sum">小计:¥${elm.price}</p>
              <div>
                <button class="minus"><img src="image/jian.png" alt=""></button>
                <span>${elm.count}</span>
                <button  class="add"><img src="image/add.png" alt=""></button>
              </div>
            </div>
          </div>
        </div>
          `)
        })
        resolve()
      }
    })
  }).then(()=>{
    let $father = $('.cart_shop');
    //减
    $father.on('click','.minus',function(){
      var n = $(this).next().html();
      if(n>1){
        $(this).next().html(n*1-1);
      };
      var p = parseInt($(this).parent().parent().prev().children(":last-child").html().split('¥')[1]); //p为单价
      $(this).parent().prev().html("小计:¥"+ parseInt(n*p-p));
      if(n<=1){
        $(this).parent().prev().html(`小计:¥${p}`)
      };
      getSum();
    })
    //加
    $father.on('click','.add',function(){
      var n = $(this).prev().html();  //n为按钮中的数量
      $(this).prev().html(n*1+1);
      var p = parseInt($(this).parent().parent().prev().children(":last-child").html().split('¥')[1]); //p为单价
      $(this).parent().prev().html("小计:¥"+ parseInt(n*p+p));
      getSum();
    })
    //绑定全选单选
    var allInput = $(".allInput");
    allInput.change(function(){
      var t = $father.children('.cart_details').children().children('.input')
      let $bool = $(this).prop('checked')
      for(let i=0;i<t.length;i++){
        $(t[i]).prop('checked',$bool)
      }
    })
    $father.on('click','input',function(){
      var i = $(".input").length;   //i为input的个数
      var s = $(".input:checked").length; //s为input选中个数
      if(i == s){
        allInput.prop("checked",true);
      }else{
        allInput.prop("checked",false);
      }
    })
    //计算总额sumer
    function getSum(){
      var money = 0; //总金额
      $(".sum").each(function(i,ele){
        money += parseInt($(ele).text().split("¥")[1]);
      })
      $(".sumer em").text(money);
    }

  }).catch((err)=>{
    console.log(err)
  })
})
