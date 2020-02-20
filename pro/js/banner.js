$(function(){
  
  var i=0;//现在正在显示第几张图片，从0开始
  var LIWIDTH=1920;//每个li的固定宽度
  var DURATION=500;//每次轮播动画持续的时间
  var LICOUNT=4;//li的总个数
  //要移动的ul
  var ulImgs=document.getElementById("ul-imgs");
  //包含小圆点列表的ul
  var ulIdxs=document.getElementById("ul-idxs");
  //小圆点的元素列表
  var lis=ulIdxs.children;
  //从当前位置移动到任意一个范围内的位置
  function moveTo(to){
    //如果用户没有传入要跳到第几张图，就默认跳到当前图的下一个张
    if(to==undefined){
      to=i+1;
    }
    if(i==0){//如果滚动从头开始，再重新加上transition
      if(to>i){//起始位置看右边的图片不会出问题
        ulImgs.className="transition";
      }else{
        ulImgs.className="";
        //将ul直接移到最后一个li
        ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
        setTimeout(function(){
          moveTo(LICOUNT-1);
        },100);//浏览器需要渲染时间,所以加个定时器,将偷梁换柱操作和加回transition属性操作隔离
        return;
      }
    }
    i=to;//先将表示第几张图片的变量i变为目标位置
    //再用i计算ulimgs的marginLeft距离
    ulImgs.style.marginLeft=-i*LIWIDTH+"px";
    //先删除所有小圆点的class
    for(var li of lis){
      li.className=""
    }
    if(i==LICOUNT){
      i=0;
      //当transition动画播放完之后，才
      setTimeout(function(){
        ulImgs.className="";//清掉transition属性
        ulImgs.style.marginLeft=0;//将ulImgs拉回0位置
      },DURATION)
    }
    //再给当前位置的小圆点添加class active
    lis[i].className="active";
  }
  //左右按钮
    var btnLeft=document.getElementById("btn-left");//左按钮
    var btnRight=document.getElementById("btn-right");//右按钮
    var canClick=true;//控制开关
    btnRight.onclick=function(){
      move(1);
    }
    function move(n){
      if(canClick){
        moveTo(i+n);//单击时移动小圆点
        canClick=false;//
        setTimeout(function(){ //设置定时器是为了防止用户一直点小圆点,必须等动画效果结束后才能重新打开开关移动
          canClick=true;
        },DURATION+100)
      }
    }
    btnLeft.onclick=function(){
      move(-1);
    }

    //自动间隔3s轮播
    var interval=3000;
    var timer=setInterval(function(){
      moveTo()
    },interval);
    var banner=document.getElementById("banner");
    banner.onmouseover=function(){
      clearInterval(timer);
    }
    banner.onmouseout=function(){
      timer=setInterval(function(){
        moveTo()
      },interval);
    }

    var ulIdxs=document.getElementById("ul-idxs");
    var canClick=true;
    ulIdxs.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<lis.length;i++){
              if(lis[i]==li){
                break;
              }
            }
            moveTo(i);
            setTimeout(function(){
              canClick=true;
            },DURATION)
          }
        }
      }
    }
})