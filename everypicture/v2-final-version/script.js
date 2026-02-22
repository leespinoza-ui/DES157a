(function () {
  "use strict";

  window.addEventListener("load", function () {
    const sections = document.querySelectorAll(".story-section");
    const image = document.querySelector("figure img");

    let tops = [];
    let pageTop = 0;
    let counter = 0;
    let prevCounter = 0;
    let doneResizing;

    function getTops() {
      tops = [];
      sections.forEach(function (section) {
        tops.push(Math.floor(section.getBoundingClientRect().top) + window.pageYOffset);
      });
    }

    resetPagePosition();

    window.addEventListener("scroll", function () {
      pageTop = window.pageYOffset + 300;

      // scrolling down
      if (counter < tops.length && pageTop > tops[counter]) {
        counter++;
      }
      // scrolling up
      else if (counter > 0 && pageTop < tops[counter - 1]) {
        counter--;
      }

      if (counter !== prevCounter) {
        if (counter === 0) {
          image.className = "full";
        } else {
          image.className = "sect" + counter;
        }
        prevCounter = counter;
      }
    });

    window.addEventListener("resize", function () {
      clearTimeout(doneResizing);
      doneResizing = setTimeout(function () {
        resetPagePosition();
      }, 500);
    });

    function resetPagePosition() {
      getTops();

      const pos = window.pageYOffset + 300;
      counter = 0;

      tops.forEach(function (top) {
        if (pos > top) counter++;
      });

      prevCounter = counter;

      if (counter === 0) {
        image.className = "full";
      } else {
        image.className = "sect" + counter;
      }
    }
  });
})();