var htmlElem = document.querySelector('html');
var pElem = document.querySelector('p');
var imgElem = document.querySelector('img');


var nameForm = document.getElementById('name');


if(!localStorage.getItem('name')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {

  localStorage.setItem('name', document.getElementById('name').value);


  setStyles();
}

function setStyles() {

  var currentName = localStorage.getItem('name');

  document.getElementById('name').value = currentName;
  document.getElementById('printName').textContent = currentName;

}


nameForm.onchange = populateStorage;
