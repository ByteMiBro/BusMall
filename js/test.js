'use strict';
console.log('test.js loaded');
window.onload = displayImage;
function Answer()
{
  this.answers = answers;
}
function ProductImage(image)
{
  this.image = image;
}

var imageArray = [
  'images/boots.jpg',
  'images/chair.jpg',
  'images/scissors.jpg',
  'images/water_can.jpg',
  'images/wine_glass.jpg',
];
function num(){
  return Math.floor(Math.random() * (imageArray.length));
}

function displayImage(){
  var randum1 = num();
  var firstImage = new Image(200, 200);
  firstImage.src = imageArray[randum1];
  var boxImage = document.getElementById('first');
  boxImage.appendChild(firstImage);

  var randum2 = num();
  while (randum1 === randum2){
    randum2 = num();
  }
  var secondImage = new Image(200, 200);
  secondImage.src = imageArray[randum2];
  var midImage = document.getElementById('second');
  midImage.appendChild(secondImage);

  var randum3 = num();
  while (randum1 === randum3 || randum2 === randum3){
    randum3 = num();
  }
  var thirdImage = new Image(200, 200);
  thirdImage.src = imageArray[randum3];
  var lastImage = document.getElementById('third');
  lastImage.appendChild(thirdImage);
}
/*window.addEventListener('laod', updateImage);
function updateImage(event) {
  event.preventDefault();

  displayImage();
};

function displayImage() {
  var boxImage = document.getElementById('box');
  boxImage.textContent = imageArray[1];
};*/
