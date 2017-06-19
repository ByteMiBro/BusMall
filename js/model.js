'use strict';
function ProductModel(name, price)
{
  this.name = name;
  this.price = price;
}
var boots = new ProductModel('Boots', '$10.00');
var chair = new ProductModel('Chair', '$20.00');
var scissors = new ProductModel('Scissors', '$16.00');
var waterCan = new ProductModel('Water Can', '$9.00');
var wineGlass = new ProductModel('Wine Glass', '18.00');

var listOfProducts = [
  new ProductModel('Boots', '$10.00'),
  new ProductModel('Chair', '$20.00'),
  new ProductModel('Scissors', '$16.00'),
  new ProductModel('Water Can', '$9.00'),
  new ProductModel('Wine Glass', '18.00'),
];
console.log(listOfProducts);
