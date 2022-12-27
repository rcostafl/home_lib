// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")




// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
//import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

//import { testeFunction, addEventListenerToEditButtom} from './s/index_controller.js';

function myFunc2(){
  alert('myFunc');
  console.log("lk ajsfhlajkh fjkashfl askhf");
}

//import {myFunc} from 'testefile.js';
// UNCOMMENT
document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  //testeFunction();
 // myFunc();
});

