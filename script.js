
function videoconAnimation() {
var videocon = document.querySelector(".video-container")
var playbtn = document.querySelector("#play")
videocon.addEventListener("mouseenter" ,function(){
 gsap.to(playbtn,{
    scale: 1,
    opacity: 1,
  })
})
videocon.addEventListener("mouseleave" ,function(){
  gsap.to(playbtn,{
    scale: 0,
    opacity: 0,
  })
})
videocon.addEventListener("mousemove" ,function (dets){
  gsap.to(playbtn,{
    left:dets.x-70,
    top:dets.y-80,
  })
})
}
videoconAnimation()

function loadinganimation(){
gsap.from("#page1 h1" , {
  y:100,
  opacity:0,
  delay:0.5,
  duration:0.9,
  stagger:0.3
})
  gsap.from("#page1 .video-container" , {
    scale:0.8,
    opacity:0,
    delay:1.3,
    duration:0.5,
  })
}
loadinganimation()

document.addEventListener("mousemove",function(dets){
  gsap.to("#cursor", {
    left:dets.x,
    top:dets.y
  })
})

document.addEventListener("DOMContentLoaded", function() {
  var flower = document.getElementById("flower");

  // Event listener to make the flower follow the mouse cursor
  document.addEventListener("mousemove", function(event) {
      // Calculate position of the flower relative to the cursor
      var flowerX = event.clientX - flower.offsetWidth / 2;
      var flowerY = event.clientY - flower.offsetHeight / 2;

      // Display the flower at the calculated position
      flower.style.left = flowerX + "px";
      flower.style.top = flowerY + "px";
  });
});












