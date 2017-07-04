'use strict';
console.log('character.js loaded');

function User(name){
  this.name = name;
}

var form = document.querySelector('form');
form.addEventListener('submit', updateName);
function updateName(event) {
  event.preventDefault();
  var name = document.querySelector('input[name = "name"]');
  var user = new User(name.value);

  renderUser(user);
};

function renderUser(user) {
  var useName = document.getElementById('name');
  useName.textContent = user.name;
};
