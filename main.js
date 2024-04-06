function phone() {
//  window.innerWidth<980?return true:return false;
  if (window.innerWidth<980) {
    return true;
    
  } else {
    return false;
  }
}
var tl = gsap.timeline();
tl.from("#loader_img", {
  // y:800,
  scale: 8,
  duration: 1,
})
tl.to("#loader_img", {
 // rotate: 360,
  yoyo: true,
  repeat: 1,
  //y:-800,
  duration: 1,

})
tl.to(".loader_img_dev", {
  // rotate:360,
  //yoyo:true,
  //repeat:1,
  y: -100 + "vh",
})
tl.from("._2_phone_div", {
  
 y: 100+"vh",
  //y:phone()?5+'vh':100+'vh',
  //duration:1,
})
tl.to(".phone_img_1", {
  y: 100+'vh',
  repeat: -1,
  yoyo: true,
  duration: 2,
}, "a1")
tl.to(".phone_img_2", {
  y: -100+'vh',
  // repeat: 1,
  // yoyo: true,
  duration: 2,

}, "a1")
tl.to(".loader", {
  y: -2000,
  //repeat: -1,
  //  yoyo: true,
  //duration:2,

}, )



/*
tl.from("#loader_img", {
  // y:800,
  scale: 8,
  duration:1,
})
tl.to("#loader_img", {
  rotate: 360,
  yoyo: true,
  repeat: 1,
  //y:-800,
    duration:1,

})
tl.to(".loader_img_dev", {
  // rotate:360,
  //yoyo:true,
  //repeat:1,
  y: -100 + "vh",
})
tl.from("._2_phone_div", {
  y: 4000,

  //duration:1,
})
tl.to(".phone_img_1", {
  y: 1500,
  repeat: -1,
  yoyo: true,
duration:2,
}, "a1")
tl.to(".phone_img_2", {
  y: -1500,
 // repeat: 1,
 // yoyo: true,
  duration:2,

}, "a1")
tl.to(".loader", {
  y: -2000,
  //repeat: -1,
//  yoyo: true,
  //duration:2,

},)


*/