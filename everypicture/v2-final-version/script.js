(function () {
  "use strict";

  const viewer = document.querySelector("#viewer");
  const sheet = document.querySelector("#sheet");
  const track = document.querySelector(".scroll-track");

  let maxMove = 0; // how far the image can travel upward

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function measure() {
    // how much taller the image is than the viewport
    const viewerH = viewer.clientHeight;
    const imgH = sheet.getBoundingClientRect().height;
    maxMove = Math.max(0, imgH - viewerH);
  }

  function update() {
    // where the scroll track starts/ends in the page
    const trackTop = track.offsetTop;
    const trackH = track.offsetHeight;
    const viewH = window.innerHeight;

    // scroll range where animation should happen
    const start = trackTop;
    const end = trackTop + trackH - viewH;

    const y = window.scrollY;
    const progress = (y - start) / (end - start);
    const t = clamp(progress, 0, 1);

    // move image up as you scroll down (negative translate)
    const translateY = -(t * maxMove);

    sheet.style.transform = `translateY(${translateY}px)`;
  }

  // Wait for image to load so we get correct height
  sheet.addEventListener("load", function () {
    measure();
    update();
  });

  window.addEventListener("resize", function () {
    measure();
    update();
  });

  window.addEventListener("scroll", function () {
    update();
  });

})();
