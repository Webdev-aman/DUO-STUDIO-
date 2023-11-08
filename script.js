function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


}

init();


var cursr = document.querySelector("#cursor")

var main = document.querySelector("#main")

document.addEventListener("mousemove", function(dets){
  cursr.style.left = dets.x + 20+"px"
  cursr.style.top = dets.y + 20+"px"
})




var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller:"#main",
        // markers:true,
        start: "top 27%",
        end: "top 0",
        scrub:3
        }
})
tl.to(".page1 h1",{
    x: -100,
    },"anim")

tl.to(".page1 h2",{
    x:100,
},"anim")

tl.to(".page1 video",{
    width:"90%",
},"anim")

var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller:"#main",
      // markers:true,
      start: "top -120%",
      end: "top -120",
      scrub:3
      }
})

tl2.to("#main",{
  backgroundColor:"#fff"
})


var tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller:"#main",
      // markers:true,
      start: "top -300%",
      end: "top -310%",
      scrub:3
      }
})

tl3.to("#main",{
  backgroundColor:"#0F0D0D"
})



var boxs = document.querySelectorAll(".box")

boxs.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){
    var att = elem.getAttribute("data-image")
    cursr.style.width = "450px"
    cursr.style.height = "350px"
    cursr.style.borderRadius = "0"
    cursr.style.background = `url(${att})`
  })

  elem.addEventListener("mouseleave", function(){
    var att = elem.getAttribute("data-image")
    cursr.style.width = "20px"
    cursr.style.height = "20px"
    cursr.style.borderRadius = "50%"
    cursr.style.background = `none`
  })
})

// var h4 = document.querySelectorAll("#nav h4")
// var purple = document.querySelector("#purple")
// h4.forEach(function(elem){
//   elem.addEventListener("mouseenter",function(){
//     purple.style.display = "block"
//     purple.style.opacity = "1"
//   })

//   elem.addEventListener("mouseleave",function(){
//     purple.style.display = "none"
//     purple.style.opacity = "0"
//   })

// })