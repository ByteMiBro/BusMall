'use strict';
//the gaol is to store product selected after each vote to local storage
/*var form = document.getElementById
function checkStorageAvailability(){
  if(){

  }
}*/
var testForm = document.getElementById('awsome');

testForm.addEventListener('radio', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  var selectedTest = event.target.querySelector("input[name = 'vote']:checked");
  var testValue = selectedTest && selectedTest.value;

  var
}

function connectRadiotoPrduct(){

}
function addStoresToLocalStorage() {
  window.localStorage.stores = JSON.stringify(stores);
  console.log(window.localStorage.stores);
}
