$( document ).ready(function() {
  //point system
  let successPoints = {
    canI: 1,
    asMe: 10,
    cantI: 3,
    allGood: 4
  }

  let favCityPoints = {
    LosAngeles: 10,
    NewYork: 2,
    London: 3,
    Paris: 4
  }

  let friendsPoints = {
    Boring: 1,
    lifeParty: 10,
    Intelligent: 3,
    Sassy: 4
  }

  let hatePoints = {
    Scott: 1,
    Blac: 10,
    Rob: 3,
    Caitlyn: 4
  }
// Process Results
let submitButton = document.getElementsByClassName("button")[0];
submitButton.addEventListener("click", processResults);
function processResults(){
  let personalityResult = getPersonality();
  console.log(personalityResult);
    function getPersonality(){
      let successChoice = document.querySelector('input[type="radio"][name="success"]:checked');
      let favCityChoice = document.querySelector('input[type="radio"][name="favCity"]:checked');
      let friendsChoice = document.querySelector('input[type="radio"][name="friends"]:checked');
      let hateChoice = document.querySelector('input[type="radio"][name="hate"]:checked');

      let totalPoints = 0;
      totalPoints = totalPoints + successPoints[successChoice.id];
      totalPoints = totalPoints + favCityPoints[favCityChoice.id];
      totalPoints = totalPoints + friendsPoints[friendsChoice.id];
      totalPoints = totalPoints + hatePoints[hateChoice.id];
      console.log(totalPoints);

      if (totalPoints == 40) {
        location.replace("Kardashian.html");
      } else {
        location.replace("NonKardashian.html");
      }
    }
}



processResults();



});
