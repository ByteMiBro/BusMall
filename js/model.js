'use strict';
console.log('model.js loaded');
function ProductModel(name, image)
{
  this.name = name;
  this.image = image;
}

var listOfProducts = [
  new ProductModel('Boots', 'images/boots.jpg'),
  new ProductModel('Chair', 'images/chair.jpg'),
  new ProductModel('Scissors', 'images/scissors.jpg'),
  new ProductModel('Water Can', 'images/water_can.jpg'),
  new ProductModel('Wine Glass', 'images/wine_glass.jpg'),
];
console.log(listOfProducts);
