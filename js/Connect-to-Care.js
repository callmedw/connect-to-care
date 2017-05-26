Searchdoc = function(){
};

Searchdoc.prototype.getSearchDocData = function(makeRow, displayName, displayDescription, displaySpecialtyname, displaySpecialtydesciption, displayPhone, displayWebsite, displayAddress, displayAddress2, displayCity, displayState, displayZip) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=toothache&location=45.523%2C-122.676%2C100&user_location=45.523%2C-122.676&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
    response.search.forEach(function(search){
      makeRow();
      displayName(search.data[0].practices[0].name);
      displayDescription(search.data[0].practices[0].description);
      displaySpecialtyname(search.data[0].specialties[0].name);
      displaySpecialtydesciption(search.data[0].specialties[0].description);
      displayPhone(search.data[0].practices[0].phones.number);
      displayWebsite(search.data[0].practices[0].website);
      displayAddress(search.data[0].practices[0].visit_address.street);
      displayAddress2(search.data[0].practices[0].visit_address.street2);
      displayCity(search.data[0].practices[0].visit_address.city);
      displayState(search.data[0].practices[0].visit_address.state);
      displayZip(search.data[0].practices[0].visit_address.zip);
    });
  }).fail(function(error) {
    $('#row').append("<tr><td>not found</td></tr>");
  });
};


exports.searchdocModule = Searchdoc;
