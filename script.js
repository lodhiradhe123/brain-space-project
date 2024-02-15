gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform
    ? "transform"
    : "fixed",
});

document.addEventListener("mousemove", function (e) {
  gsap.to("#cursore", {
    top: e.y,
    left: e.x,
    duration: 1,
  });
});

gsap.to("#page1 video", {
  filter: "blur(20px)",
  transform: "scaleX(0.85)",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "main",
    markers: true,
    start: "top 0",
    end: "top -50%",
    scrub: true,
  },
});

gsap.to("#second", {
  y: -100,
  duration: 2,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "main",
    start: "top 0",
    end: "top -10%",
    scrub: true,
  },
});

gsap.to("nav i", {
  display: "block",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "main",
    start: "top -15%",
    end: "top -20%",
    scrub: true,
  },
});

gsap.to("#page2 #imgscroll", {
  transform: "translateY(12%) translateX(75%)",
  duration: 15,
  repeat: -1,
  ease: 5,
});

var tl = gsap.timeline();
tl.from("h2 ,p,button", {
  y: 200,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "h2,p,button",
    scroller: "main",
    markers: true,
    start: "top 300",
    end: "top 70",
    scrub: true,
  },
});
