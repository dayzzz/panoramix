var $ = require('jquery');

window.jQuery = $; // needed for bootstrap transition.js
require('bootstrap');

$(document).ready(function() {
  $('#carousel').carousel();
});
