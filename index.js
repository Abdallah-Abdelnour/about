

/************ */

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    let y = document.querySelector(".logo");
    y.style.cssText = 'display: grid;grid-template-columns: 20% 80%;';
  } else {
    x.className = "topnav";
  }
}

/************** */
