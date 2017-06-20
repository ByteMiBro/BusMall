'use strict';
//when user imput page laods three images need to be presen
//this is so i can get e pull request i mesed up
/*function(getRandomImages)
{
  var egami = listOfImages[i]
}*/
// objectives for today are creating a fake data set and a cchart
/*userData)= [
 {
 name: 'boots'
 clicks: 21
 },
 {
 name:'chair'
 clicks: 9
 },
 {
 name: 'scissors'
 clicks: 2
 },
];*/
var barData = {
  labels: ['col1', 'col2', 'col3'],
  datasets: [{
    label: 'Bar Chart',
    borderWidth: 1,
    data: [
      21,
      9,
      2
    ]
  }]
};

var userData = document.getElementById('userData').getContext('2d');
 new Chart(userData, {
   type: 'bar',
   data: barData
 });
  /*name: 'boots',
  clicks: 21
  },
  {
  name:'chair',
  clicks: 9
  },
  {
  name: 'scissors',
  clicks: 2
});*/
