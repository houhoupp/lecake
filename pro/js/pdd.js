$(function(){
  $.ajax({
    url:"http://localhost:8080/header.html",
    type:"get",
    success:function(result){
      $('#header').replaceWith(result)
    }
  }),
  $.ajax({
    url:"http://localhost:8080/footer.html",
    type:"get",
    success:function(result){
      $('#footer').replaceWith(result)
    }
  })
})