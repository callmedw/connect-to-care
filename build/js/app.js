(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "5c73474d9554c39717cb9ebd67a45fb6";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

Searchdoc = function(){
};

Searchdoc.prototype.getSearchDocData = function(ailmentQuery, makeRow, makefirstColumn, displayTotal, displayFirstName, displayMiddleName, displayLastName, displayTitle) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailmentQuery + '&location=45.523%2C-122.676%2C100&user_location=45.523%2C-122.676&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
    displayTotal(response.data.length);
    // console.log(response.data.practices.visit_address);
    console.log(response.data.practices);
    // console.log(response.data.practices.phones);
    console.log(response.data);
    response.data.forEach(function(data){
      makeRow();
      makefirstColumn();
      displayFirstName(data.profile.first_name);
      displayMiddleName(data.profile.middle_name);
      displayLastName(data.profile.last_name);
      displayTitle(data.profile.title);
    });
  });
};


exports.searchdocModule = Searchdoc;


//       displaySpecialtyname(specialties[0].name);
//       displaySpecialtydesciption(specialties[0].description);
//       displayPhone(practice[0].phones.number);
//       displayWebsite(practice[0].website);
//       displayAddress(practice[0].visit_address.street);
//       displayAddress2(practice[0].visit_address.street2);
//       displayCity(practice[0].visit_address.city);
//       displayState(practice[0].visit_address.state);
//       displayZip(practice[0].visit_address.zip);
//

},{"./../.env":1}],3:[function(require,module,exports){
var Searchdoc =  require('./../js/connect-to-care.js').searchdocModule;

var displayTotal = function(total) {
  $('.result-total').append(`${total}`)
}

var makeRow = function() {
  $('#table-body').append(`<tr></tr>`);
};

var makefirstColumn = function() {
  $('tr').append(`<td></td>`);
};

var displayFirstName = function(firstName){
  $('td').last().append(`${firstName}` + ` `);
};

var displayMiddleName = function(middleName){
  $('td').last().append(`${middleName}` + ` `);
};

var displayLastName = function(lastName){
  $('td').last().append(`${lastName}` + `, `);
};

var displayTitle = function(title){
  $('td').last().append(`${title}`);
};

// var displayDescription = function(description){
//   $('tr').last().append(`<td>${description}</td>`);
// };

// var displayWebsite = function(website){
//   $('tr').last().append(`<td><a href="${website}" target="_blank">${website}</a></td>`);
// };


$(document).ready(function() {
  $('#input-submit').click(function() {
    $('#search-result').show();
    var search = new Searchdoc();
    var ailmentQuery = $('#specialty').val();
    $('#specialty').val("");
    search.getSearchDocData(ailmentQuery, makeRow, makefirstColumn, displayTotal, displayFirstName, displayMiddleName, displayLastName, displayTitle);
  });
});

},{"./../js/connect-to-care.js":2}]},{},[3]);
