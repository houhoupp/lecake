$(function(){
  $('.search').click(function(){
    let vals = $('#look_v').val()
    //console.log(vals)
    window.open(`product.html?dname=${vals}`,'_self')
  })
})