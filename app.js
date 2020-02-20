const express=require("express");
//引入路由器
const bodyParser=require("body-parser");
const proRouter=require("./routes/pro.js")

let app=express();
app.listen(8080);

//托管静态资源
app.use(express.static("./pro"));
app.use(bodyParser.urlencoded({
  extended:false
}));



//挂载
app.use("/pro",proRouter)