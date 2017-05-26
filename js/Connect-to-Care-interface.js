var Searchdoc =  require('./../js/connect-to-care.js').searchdocModule;

var makeRow = function() {
  $('#table-body').append(`<tr></tr>`);
};

var displayName = function(date){
  $('tr').last().append(`<td>${date}</td>`);
};

var displayDescription = function(date){
  $('tr').last().append(`<td>${date}</td>`);
};

var displaySpecialtyname = function(title){
  $('tr').last().append(`<td>${title}</td>`);
};

var displaySpecialtydesciption = function(type){
  $('tr').last().append(`<td>${type}</td>`);
};

var displayPhone = function(type){
  $('tr').last().append(`<td>${type}</td>`);
};

var displayWebsite = function(url){
  $('tr').last().append(`<td><a href="${url}" target="_blank">${url}</a></td>`);
};

var displayAddress = function(type){
  $('tr').last().append(`<td>${type}</td>`);
};

var displayAddress2 = function(type){
  $('tr').last().append(`<td>${type}</td>`);
};

var displayCity = function(type){
  $('tr').last().append(`<td>${type}</td>`);
};

var displayState = function(type){
  $('tr').last().append(`<td>${type}</td>`);
};

var displayZip = function(type){
  $('tr').last().append(`<td>${type}</td>`);
};

$(document).ready(function() {
  var search = new Searchdoc();
  incident.getSearchDocData(makeRow, displayName, displayDescription, displaySpecialtyname, displaySpecialtydesciption, displayPhone, displayWebsite, displayAddress, displayAddress2, displayCity, displayState, displayZip);
});
