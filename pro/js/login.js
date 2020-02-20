$(function(){
    var $uname=$("#uname");
    $uname.blur(function(){
        var $name=$(this);
        var $span= $name.next();
        console.log( $name)
        if( $name.val()==""){
            $span.html("用户名不能为空");
        }else{
            $span.html("<img src='image/ok.png'>")
        }
    })

    var $upwd=$("#upwd");
    $upwd.blur(function(){
        var $pwd=$(this);
        var $span=$pwd.next();
        if($pwd.val()==""){
            $span.html("密码不能为空");
        }else{
            $span.html("<img src='image/ok.png'>")
        }
    })

    var $btn=$(".btn");
    $btn.click(function(e){
        //xhr四部曲
        e.preventDefault();
        $.ajax({
            url: 'http://localhost:8080/pro/login',
            type :'get',
            data :{
                uname:$uname.val(),
                upwd:$upwd.val()
            },
            dataType:'json',
            success:function(result){
                if(result==1){
                    alert("登录成功");
                    window.location.href='http://localhost:8080/index.html';
                }else{
                    alert("登录失败");
                }
            }
        })
    })
})