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
/*function randomImage(){
  var num = Math.floor(Math.random() * imageArray.length);
  document.getElementById('box').src = imageArray[num];
}*/
function displayImage(){
  var num = Math.floor(Math.random() * (imageArray.length));
  var myImage = new Image(200, 200);
  myImage.src = imageArray[num];

  var boxImage = document.getElementById('first');
  boxImage.appendChild(myImage);

  var midImage = document.getElementById('second');
  midImage.appendChild(myImage);

  var lastImage = document.getElementById('third');
  lastImage.appendChild(myImage);
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
