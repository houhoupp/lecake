const express=require("express");
const {pool}=require("../pool.js");
//引入路由器
let router=express.Router();

//1.登录
router.get("/login",(req,res)=>{
  //获取数据
  // var $uname=req.params.uname || "";
  // var $upwd=req.params.upwd || "";
  var $uname = req.query.uname || "";
  var $upwd = req.query.upwd || "";
  //3.sql命令
  let sql =`select * from lecake_user where uname='${$uname}' and upwd='${$upwd}'`
  pool.query(sql,(err,result)=>{
    if(err){
      console.log("err",err)
      return
    }
    if(result.length>0){
      res.send("1")
    }else{
      res.send("0")
    }
  })
})

//2.注册
router.post("/reg",(req,res)=>{
  //1.获取数据
  var $uname=req.body.uname || "";
  var $upwd =req.body.upwd || "";
  var $phone=req.body.phone || "";
  //3.sql命令
  let sql=`insert into lecake_user(uname,upwd,phone) values("${$uname}","${$upwd}","${$phone}")`;
  pool.query(sql,(err,result)=>{
    if(err){throw err};
    if(result.affectedRows>0){
      res.send("1")
    }else{
      res.send("0")
    }
  })
})

//去重
router.get("/reg",(req,res)=>{
  //1.获取数据
  var $uname=req.query.uname || "";
  var $phone=req.query.phone || "";
  //3.sql命令
  let sql = $uname!="" ? `select * from lecake_user where uname='${$uname}'` : `select * from lecake_user where phone='${$phone}'`
  pool.query(sql,(err,result)=>{
    if(err){throw err};
    console.log("result",result)
    if(result.length>0){
      res.send(true);
    }else{
      res.send(false);
    }
  })
})

//全部商品
router.get("/all",(req,res)=>{
  //sql命令  
  let sql = `select * from lecake_details`;
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    //console.log(result);
    if(result.length>0){
      res.send(result);
    }else{
      res.send("0");
    }
  })
})

//分页商品
router.get("/details",(req,res)=>{
  //获取数据
  let pSize =req.query.pSize;
  let pno = req.query.pno;
  pno = (pno - 1) * pSize;
  //console.log(pno) 
  //sql命令
  let sql = `select * from lecake_details LIMIT ${pno},${pSize}`;
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    //console.log(result);
    if(result.length>0){
      res.send(result);
    }else{
      res.send("0");
    }
  })
})

//根据id查找商品
router.get("/find",(req,res)=>{
  //获取数据
  let did = req.query.did;
  //console.log(did)
  //sql命令
  let sql = `select * from lecake_details where did=?`;
  pool.query(sql,[did],(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send(result)
    }else{
      res.send("0")
    }
  })
  
})

//根据dname查找商品
router.get("/look",(req,res)=>{
  //获取数据
  let dname = req.query.dname;
  //sql命令
  let sql = `select * from lecake_details where dname=?`;
  pool.query(sql,[dname],(err,result)=>{
    if(err)throw err;
    //console.log(result);
    if(result.length>0){
      res.send(result[0]);
    }else{
      res.send("0");
    }
  })
})

module.exports = router;