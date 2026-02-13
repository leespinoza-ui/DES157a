(function () {
  "use strict";

  const grid = document.querySelector(".grid");

  const imgChristmas = document.querySelector(".christmas");
  const imgSimple = document.querySelector(".simple");
  const imgValentine = document.querySelector(".valentine");


  imgChristmas.addEventListener("mouseenter", function () {
    grid.classList.add("is-hovering");

    imgChristmas.classList.add("is-active");
    imgSimple.classList.remove("is-active");
    imgValentine.classList.remove("is-active");
  });

  imgChristmas.addEventListener("mouseleave", function () {
    grid.classList.remove("is-hovering");
    imgChristmas.classList.remove("is-active");
  });


  imgSimple.addEventListener("mouseenter", function () {
    grid.classList.add("is-hovering");

    imgChristmas.classList.remove("is-active");
    imgSimple.classList.add("is-active");
    imgValentine.classList.remove("is-active");
  });

  imgSimple.addEventListener("mouseleave", function () {
    grid.classList.remove("is-hovering");
    imgSimple.classList.remove("is-active");
  });


  imgValentine.addEventListener("mouseenter", function () {
    grid.classList.add("is-hovering");

    imgChristmas.classList.remove("is-active");
    imgSimple.classList.remove("is-active");
    imgValentine.classList.add("is-active");
  });

  imgValentine.addEventListener("mouseleave", function () {
    grid.classList.remove("is-hovering");
    imgValentine.classList.remove("is-active");
  });


  /* ---------- CLICK VIBE ---------- */

  function clearVibes() {
    document.body.classList.remove("vibe-christmas");
    document.body.classList.remove("vibe-simple");
    document.body.classList.remove("vibe-valentine");

    imgChristmas.classList.remove("is-selected");
    imgSimple.classList.remove("is-selected");
    imgValentine.classList.remove("is-selected");
  }

  imgChristmas.addEventListener("click", function () {
    clearVibes();
    document.body.classList.add("vibe-christmas");
    imgChristmas.classList.add("is-selected");
  });

  imgSimple.addEventListener("click", function () {
    clearVibes();
    document.body.classList.add("vibe-simple");
    imgSimple.classList.add("is-selected");
  });

  imgValentine.addEventListener("click", function () {
    clearVibes();
    document.body.classList.add("vibe-valentine");
    imgValentine.classList.add("is-selected");
  });

})();
