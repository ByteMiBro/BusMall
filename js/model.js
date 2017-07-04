'use strict';
function ProductModel(name, price)
{
  this.name = name;
  this.price = price;
}
//goal is to store description in a variable of its own.
function ProductDescription(description)
{
  this.description = description;
}

function ProductImage(image)
{
  this.image = image;
}

var bootDescription = new ProductDescription('This is a thick rubber soled rain boot, designed and tested to keep your feet dry in the wetest conditions.');
var chairDescription = new ProductDescription('This is a chair biuld by Rugma\'s in the east himalayan valley of Gustag. each grain of this nicely put together plastic chair was hadpicked. In this chair you will never fall');
var scissorDescription = new ProductDescription('The blades on these scissors were forged by an elvish smith. They cut through even the thoughest papers.');
var watercanDescription = new ProductDescription('this watering can is recomended by the scociety of watering women as its water threshold is the largest ever created.');
var wineglassDescription = new ProductDescription('I don\'t drink ofted, but when I do I use this clear plastic wine glass.');

var bootImage = new ProductImage('../images/boots.jpg');
var chairImage = new ProductImage('../images/chair.jpg');
var scissorImage = new ProductImage('../images/scissors.jpg');
var watercanImage = new ProductImage('../images/water_can.jpg');
var wineglassImage = new ProductImage('../images/wine_glass.jpg');

var boots = new ProductModel('Boots', '$10.00');
var chair = new ProductModel('Chair', '$20.00');
var scissors = new ProductModel('Scissors', '$16.00');
var waterCan = new ProductModel('Water Can', '$9.00');
var wineGlass = new ProductModel('Wine Glass', '18.00');

var listOfImages = [
  new ProductImage("../images/boots.jpg"),
  new ProductImage("../images/chair.jpg"),
  new ProductImage("../images/scissors.jpg"),
  new ProductImage("../images/water_can.jpg"),
  new ProductImage("../images/wine_glass.jpg"),
];

var listOfDescriptions = [
  new ProductDescription('This is a thick rubber soled rain boot, designed and tested to keep your feet dry in the wetest conditions.'),
  new ProductDescription('This is a chair biuld by Rugma\'s in the east himalayan valley of Gustag. each grain of this nicely put together plastic chair was hadpicked. In this chair you will never fall'),
  new ProductDescription('The blades on these scissors were forged by an elvish smith. They cut through even the thoughest papers.'),
  new ProductDescription('this watering can is recomended by the scociety of watering women as its water threshold is the largest ever created.'),
  new ProductDescription('I don\'t drink ofted, but when I do I use this clear plastic wine glass.'),
];

var listOfProducts = [
  new ProductModel('Boots', '$10.00'),
  new ProductModel('Chair', '$20.00'),
  new ProductModel('Scissors', '$16.00'),
  new ProductModel('Water Can', '$9.00'),
  new ProductModel('Wine Glass', '18.00'),
];
console.log(listOfImages);
console.log(listOfDescriptions);
console.log(listOfProducts);
