'use strict';
//the gaol is to store product selected after each vote to local storage
function addStoresToLocalStorage() {
  window.localStorage.stores = JSON.stringify(stores);
  console.log(window.localStorage.stores);
}
