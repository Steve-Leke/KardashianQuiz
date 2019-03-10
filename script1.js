$( document ).ready(function() {
  let tryAgainButton = document.getElementsByClassName("button1")[0];
  tryAgainButton.addEventListener("click",tryAgain)
  function tryAgain(){
  location.replace("index.html");
  }
});
