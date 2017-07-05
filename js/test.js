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
var products = [
  listOfProducts[0],
  listOfProducts[1],
  listOfProducts[2],
  listOfProducts[3],
  listOfProducts[4],
];

var imageArray = [
  products[0].image,
  products[1].image,
  products[2].image,
  products[3].image,
  products[4].image,
];

/*var imageArray = [
  'images/boots.jpg',
  'images/chair.jpg',
  'images/scissors.jpg',
  'images/water_can.jpg',
  'images/wine_glass.jpg',
];*/
function num(){
  return Math.floor(Math.random() * (imageArray.length));
}

function displayImage(){
  var randum1 = num();
  var firstImage = new Image(200, 200);
  firstImage.src = imageArray[randum1];
  var boxImage = document.getElementById('first');
  boxImage.appendChild(firstImage);
  console.log(firstImage.src);
  var randum2 = num();
  while (randum1 === randum2){
    randum2 = num();
  }
  var secondImage = new Image(200, 200);
  secondImage.src = imageArray[randum2];
  var midImage = document.getElementById('second');
  midImage.appendChild(secondImage);
  console.log(secondImage.src);
  var randum3 = num();
  while (randum1 === randum3 || randum2 === randum3){
    randum3 = num();
  }
  var thirdImage = new Image(200, 200);
  thirdImage.src = imageArray[randum3];
  var lastImage = document.getElementById('third');
  lastImage.appendChild(thirdImage);
  console.log(thirdImage.src);
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
