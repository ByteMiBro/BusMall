'use strict';
//the gaol is to store product selected after each vote to local storage

//grabs form from html
var testForm = document.getElementById('test-form');
//tells it to run through the event handler upon submiting
testForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  //prevents entire form from submitting
  event.preventDefault();
  //checks if value in radio button is selected
  var selectedTest = document.querySelector('input[name = "test"]:checked');
  //sets a value for testValue
  var testValue = selectedTest && selectedTest.value;
  //I can tell if it worked
  console.log(testValue);
}
function Form(name, click) {
  this.name = name;
  this.click = click || 0;
}

var forms = getFormsFromLocalStorage() || createDefaultForms();
console.log(forms);

function createDefaultForms() {
  return [
    new Form('one'),
    new Form('Two')
  ];
}

function getFormsFromLocalStorage() {
  var formString = window.localStorage.forms;
  if (!formString) {
    return null;
  }

  var formsFromJson = JSON.parse(formString);
  return valuesFromJson.map(function(formObj) {
    console.log(formObj);
    return new Product(formObj.clicks);
  });
}
function addStoresToLocalStorage() {
  window.localStorage.forms = JSON.stringify(forms);
  console.log(window.localStorage.forms);
}
