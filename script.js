document.addEventListener("mousemove", function (e) {
  gsap.to("#cursore", {
    top: e.y,
    left: e.x,
    duration: 1,
  });
});

gsap.to("video", {
  filter: "blur(20px)",
  transform: "scaleX(0.85)",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
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
    scroller: "body",
    start: "top 0",
    end: "top -10%",
    scrub: true,
  },
});

gsap.to("nav i", {
  display: "block",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -15%",
    end: "top -20%",
    scrub: true,
  },
});

gsap.to("#page2 img", {
  transform: "translateY(12%) translateX(75%)",
  duration: 15,
  repeat: -1,
  ease: "none",
});
