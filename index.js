// Changing first image

var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png";  // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage;  // images/dice1.png - images/dice6.png

// Firstly select element to be changed
var image1 = document.querySelectorAll("img")[0];    // select the first img element out of two img elements

// Setting the attribute (here, src) of first img element to be changed
image1.setAttribute("src", randomImageSource);


// Changing second image

var randomNumber2 = Math.floor(Math.random() * 6) + 1;  // 1-6

var randomDiceSource2 = "images/dice" + randomNumber2 + ".png";   // images/dice1.png - images/dice6.png

// select the second img element out of two img elements, then setting the attribute (here, src) of second img element to be changed
document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);

// Code in one line for both images
// document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png");
// document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png");


// Changing h1

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player1 Wins!";
}else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
