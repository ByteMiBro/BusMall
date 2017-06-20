'use strict';

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
  labels: ['Boots', 'Chair', 'Scissors', 'Water Can', 'Wine Glass'],
  datasets: [{
    label: 'User Data',
    borderWidth: 1,
    backgroundColor: '#333',
    borderColor: 'steelblue',
    data: [
      21,
      9,
      2,
      12,
      6
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
