$('.carousel').carousel({
  interval: false
})
$('.color-select').click(function(){
  $('.carousel').carousel('next')
  $('#buy-colors .color-select').toggleClass('color-active')
})
$('#del-applecare-btn').hide()
$('#buy-applecare').click(function(){
  $('#buy-applecare').toggleClass('applecare-selected')
  $('#buy-applecare h4').toggle()
})
