var Searchdoc =  require('./../js/connect-to-care.js').searchdocModule;

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
  $('td').last().append(`${lastName}`);
};

// var displayDescription = function(description){
//   $('tr').last().append(`<td>${description}</td>`);
// };
//
// var displaySpecialtyname = function(specialty){
//   $('tr').last().append(`<td>${specialty}</td>`);
// };
//
// var displaySpecialtydesciption = function(specialtyDesc){
//   $('tr').last().append(`<td>${specialtyDesc}</td>`);
// };
//
// var displayPhone = function(phone){
//   $('tr').last().append(`<td>${phone}</td>`);
// };
//
// var displayWebsite = function(website){
//   $('tr').last().append(`<td><a href="${website}" target="_blank">${website}</a></td>`);
// };
//
// var displayAddress = function(address){
//   $('tr').last().append(`<td>${address}</td>`);
// };
//
// var displayAddress2 = function(address2){
//   $('tr').last().append(`<td>${address2}</td>`);
// };
//
// var displayCity = function(city){
//   $('tr').last().append(`<td>${city}</td>`);
// };
//
// var displayState = function(state){
//   $('tr').last().append(`<td>${state}</td>`);
// };
//
// var displayZip = function(zip){
//   $('tr').last().append(`<td>${zip}</td>`);
// };

$(document).ready(function() {
  $('#input-submit').click(function() {
    var search = new Searchdoc();
    var ailmentQuery = $('#specialty').val();
    $('#specialty').val("");
    search.getSearchDocData(ailmentQuery, makeRow, makefirstColumn, displayFirstName, displayMiddleName, displayLastName);
  });
});


// var Searchdoc =  require('./../js/connect-to-care.js').searchdocModule;
//
// var makeRow = function() {
//   $('#table-body').append(`<tr></tr>`);
// };
//
// var displayName = function(name){
//   $('tr').last().append(`<td>${name}</td>`);
// };
//
// var displayDescription = function(description){
//   $('tr').last().append(`<td>${description}</td>`);
// };
//
// var displaySpecialtyname = function(specialty){
//   $('tr').last().append(`<td>${specialty}</td>`);
// };
//
// var displaySpecialtydesciption = function(specialtyDesc){
//   $('tr').last().append(`<td>${specialtyDesc}</td>`);
// };
//
// var displayPhone = function(phone){
//   $('tr').last().append(`<td>${phone}</td>`);
// };
//
// var displayWebsite = function(website){
//   $('tr').last().append(`<td><a href="${website}" target="_blank">${website}</a></td>`);
// };
//
// var displayAddress = function(address){
//   $('tr').last().append(`<td>${address}</td>`);
// };
//
// var displayAddress2 = function(address2){
//   $('tr').last().append(`<td>${address2}</td>`);
// };
//
// var displayCity = function(city){
//   $('tr').last().append(`<td>${city}</td>`);
// };
//
// var displayState = function(state){
//   $('tr').last().append(`<td>${state}</td>`);
// };
//
// var displayZip = function(zip){
//   $('tr').last().append(`<td>${zip}</td>`);
// };
//
// $(document).ready(function() {
//   $('#input-submit').click(function() {
//     var search = new Searchdoc();
//     var ailmentQuery = $('#specialty').val();
//     $('#specialty').val("");
//     search.getSearchDocData(ailmentQuery, makeRow, displayName, displayDescription, displaySpecialtyname, displaySpecialtydesciption, displayPhone, displayWebsite, displayAddress, displayAddress2, displayCity, displayState, displayZip);
//   });
// });
