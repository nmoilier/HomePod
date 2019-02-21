let body = document.querySelector("body")
let vid = document.querySelector("#video")
let trigger = document.querySelector("#video-trigger")

$('#video-onde').play()
trigger.addEventListener('click',
function(){
  vid.play()
  body.style.overflowY = "hidden"
});

$('#modalvideo').on('hidden.bs.modal', function () {
  vid.pause()
  body.style.overflowY = "visible"
})
