(function () {
  "use strict";

  const form = document.querySelector("#myform");
  const madlib = document.querySelector("#madlib");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const adjective1 = document.querySelector("#adjective1").value;
    const animal = document.querySelector("#animal").value;
    const place1 = document.querySelector("#place1").value;
    const verb1 = document.querySelector("#verb1").value;
    const noun1 = document.querySelector("#noun1").value;
    const adjective2 = document.querySelector("#adjective2").value;
    const noun2 = document.querySelector("#noun2").value;
    const noun3 = document.querySelector("#noun3").value;
    const place2 = document.querySelector("#place2").value;
    const verb2 = document.querySelector("#verb2").value;
    const noun4 = document.querySelector("#noun4").value;
    const adjective3 = document.querySelector("#adjective3").value;

    
    document.querySelector("#adj1").textContent = adjective1;
    document.querySelector("#animal1").textContent = animal;
    document.querySelector("#animal1b").textContent = animal;
    document.querySelector("#animal1c").textContent = animal;
    document.querySelector("#animal1d").textContent = animal;

    document.querySelector("#place1out").textContent = place1;
    document.querySelector("#verb1out").textContent = verb1;
    document.querySelector("#noun1out").textContent = noun1;

    document.querySelector("#adj2").textContent = adjective2;
    document.querySelector("#noun2out").textContent = noun2;
    document.querySelector("#noun3out").textContent = noun3;

    document.querySelector("#place2out").textContent = place2;
    document.querySelector("#verb2out").textContent = verb2;
    document.querySelector("#noun4out").textContent = noun4;

    document.querySelector("#adj3").textContent = adjective3;

    let myText;

    if (adjective1 && animal && place1 && verb1 && noun1 && adjective2 && noun2 &&noun3 && place2 && verb2 && noun4 && adjective3) {
        myText = `Here are the words you submitted: 

        <br>${adjective1}, ${animal}, ${place1}, ${verb1} ${noun1}, ${adjective2}, ${noun2}, ${noun3}, ${place2}, ${verb2}, ${noun4}, ${adjective3}.<br>
        
        You can now scroll down to see your MadLib Story!`;
        
    } else {
      myText = "Fill out the fields before scrolling!";
    }

    madlib.innerHTML = myText;
  });
})();
