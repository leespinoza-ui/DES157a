(function () {
  "use strict";

  const madlib = document.querySelector('#madlib');
  const form = document.querySelector('#form');
  const madlibOverlay = document.querySelector('#madlib-overlay');
  const closeBtn = document.querySelector('#close');
  const errorMessage = document.querySelector('#error');  

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

    let myText;

    if(adjective1 == ''){
      myText = "Please provide a adjective.";
      document.querySelector('#adjective1').focus();
      errorMessage.innerHTML = myText

    } else if (animal == ''){
      myText = "Please provide a animal.";
      document.querySelector('#animal').focus();
      errorMessage.innerHTML = myText
      
    }else if (place1 == ''){
      myText = "Please provide a place.";
      document.querySelector('#place1').focus();
      errorMessage.innerHTML = myText
      
    }else if (verb1 == ''){
      myText = "Please provide a verb.";
      document.querySelector('#verb1').focus();
      errorMessage.innerHTML = myText
      
    }else if (noun1 == ''){
      myText = "Please provide a noun.";
      document.querySelector('#noun1').focus();
      errorMessage.innerHTML = myText
      
    }else if (adjective2 == ''){
      myText = "Please provide a adjective.";
      document.querySelector('#adjective2').focus();
      errorMessage.innerHTML = myText
      
    }else if (noun2 == ''){
      myText = "Please provide a noun.";
      document.querySelector('#noun2').focus();
      errorMessage.innerHTML = myText
      
    }else if (noun3 == ''){
      myText = "Please provide a noun.";
      document.querySelector('#noun3').focus();
      errorMessage.innerHTML = myText
      
    }else if (place2 == ''){
      myText = "Please provide a place.";
      document.querySelector('#place2').focus();
      errorMessage.innerHTML = myText
      
    }else if (verb2 == ''){
      myText = "Please provide a verb.";
      document.querySelector('#verb2').focus();
      errorMessage.innerHTML = myText
      
    }else if (noun4 == ''){
      myText = "Please provide a noun.";
      document.querySelector('#noun4').focus();
      errorMessage.innerHTML = myText
      

    } else if (adjective3 == ''){
      myText = "Please provide a adjective.";
      document.querySelector('#adjective3').focus();
      errorMessage.innerHTML = myText
      
    } else {
      madlib.innerHTML = myText;
      myText = `<h2>The Story</h2>

      <p>It all started on a <strong><mark>${adjective1}</mark></strong> morning when a very suspicious <strong><mark>${animal}</mark></strong> woke up inside the <strong><mark>${place1}</mark></strong>.<p>

      <p>Without warning, the <strong><mark>${animal}</mark></strong> began to <strong><mark>${verb1}</mark></strong> while shouting about a missing <strong><mark>${noun1}</mark></strong>.</p>

      <p>People nearby froze in fear as the <strong><mark>${adjective2}</mark><strong> <strong><mark>${animal}</mark></strong> knocked over chairs, slipped on the floor, and accidentally launched the <strong><mark>${noun2}</mark></strong> into the air.</p>

      <p>Somehow, the <strong><mark>${noun3}</mark></strong> landed back inside the <strong><mark>${place2}</mark></strong>, causing alarms to go off and confetti to rain from the ceiling.</p>

      <p>In the end, the <strong><mark>${animal}</mark></strong> bowed politely,continued to <strong><mark>${verb2}</mark></strong>, and vanished forever leaving behind only the <strong><mark>${noun4}</mark></strong> and a very <strong><mark>${adjective3}</mark></strong> memory.</p>
      
      <img src="images/animals.png alt="animals">`;

      document.querySelector('#adjective1').value = '';
      document.querySelector('#animal').value = '';
      document.querySelector('#place1').value = '';
      document.querySelector('#verb1').value = '';
      document.querySelector('#noun1').value = '';
      document.querySelector('#adjective2').value = '';
      document.querySelector('#noun2').value = '';
      document.querySelector('#noun3').value = '';
      document.querySelector('#place2').value = '';
      document.querySelector('#verb2').value = '';
      document.querySelector('#noun4').value = '';
      document.querySelector('#adjective3').value = '';


    madlib.innerHTML = myText;
    madlibOverlay.style.display = "block";
    }
  });

    closeBtn.addEventListener('click', function(event){
        event.preventDefault();
        madlibOverlay.style.display = "none";

    if (event.key === 'Escape') {
        madlibOverlay.style.display = "none";
    }
  });
})();