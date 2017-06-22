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

  var selectedTest = event.target.querySelector('input[name = 'vote']:checked');
  var testValue = selectedTest && selectedTest.value;

  var selectedLetter = event.target.querySelector('input[name = 'letter']:checked');
  var letterValue = selectedLetter && selectedLetter.value;

  var selectGeod = event.target.querySelector()

  console.log({
    test: testValue,
    letter: letterValue
  });
}

function connectRadiotoPrduct(){

}
function addStoresToLocalStorage() {
  window.localStorage.stores = JSON.stringify(stores);
  console.log(window.localStorage.stores);
}
