 document.getElementById("squareMe").addEventListener("mouseover", function () {
     document.getElementById("squareMe").style.backgroundColor = "blue";
 });
 document.getElementById("squareMe").addEventListener("mousedown", function () {
     document.getElementById("squareMe").style.backgroundColor = "red";
 });
 document.getElementById("squareMe").addEventListener("mouseup", function () {
     document.getElementById("squareMe").style.backgroundColor = "yellow";
 });
 document.getElementById("squareMe").addEventListener("dblclick", function () {
     document.getElementById("squareMe").style.backgroundColor = "green";
 });
 document.getElementById("squareMe").addEventListener("mouseout", function () {
     document.getElementById("squareMe").style.backgroundColor = "orange";
 });


 window.addEventListener("keydown", function () {
     switch (event.keyCode) {
     case 66:
         document.getElementById("squareMe").style.backgroundColor = "blue";
         break;
     case 82:
         document.getElementById("squareMe").style.backgroundColor = "red";
         break;
     case 89:
         document.getElementById("squareMe").style.backgroundColor = "yellow";
         break;
     case 71:
         document.getElementById("squareMe").style.backgroundColor = "green";
         break;
     case 79:
         document.getElementById("squareMe").style.backgroundColor = "green";
         break;
     }
 });