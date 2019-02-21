$('.carousel').carousel({
  interval: false
})
$('.color-select:first-child').click(function(){
  $('.carousel').carousel(0)
  $('#buy-colors .color-select:last-child').removeClass('color-active')
  $('#buy-colors .color-select:first-child').addClass('color-active')
})
$('.color-select:last-child').click(function(){
  $('.carousel').carousel(1)
  $('#buy-colors .color-select:first-child').removeClass('color-active')
  $('#buy-colors .color-select:last-child').addClass('color-active')
})
$('#del-applecare-btn').hide()
$('#buy-applecare').click(function(){
  $('#buy-applecare').toggleClass('applecare-selected')
  $('#buy-applecare h4').toggle()
})
