var Searchdoc =  require('./../js/connect-to-care.js').searchdocModule;

var displayTotal = function(total) {
  $('.result-total').append(`${total}`);
};

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
    $('table').show();
    var search = new Searchdoc();
    var ailmentQuery = $('#specialty').val();
    $('#specialty').val("");
    search.getSearchDocData(ailmentQuery, makeRow, makefirstColumn, displayTotal, displayFirstName, displayMiddleName, displayLastName, displayTitle);
  });
});
