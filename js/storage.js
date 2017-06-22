'use strict';
//the gaol is to store product selected after each vote to local storage
/*var form = document.getElementById
function checkStorageAvailability(){
  if(){

  }
}*/

var testForm = document.getElementById('test-form');

testForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var selectedTest = document.querySelector('input[name = "test"]:checked');
//  for (j = 0 ; j < 3 ; j++) {
    //var selectedTest = document.getElementByName('test').checked === j;

  var testValue = selectedTest && selectedTest.value;
  console.log(testValue);
}

/*function connectRadiotoPrduct(){

}
function addStoresToLocalStorage() {
  window.localStorage.stores = JSON.stringify(stores);
  console.log(window.localStorage.stores);
}*/
