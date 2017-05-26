Searchdoc = function(){
};

Searchdoc.prototype.getSearchdocData = function(makeRow, displaySearchdocDate, displaySearchdocTitle, displayType, displayUrl) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=toothache&location=45.523%2C-122.676%2C100&user_location=45.523%2C-122.676&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
    response.search.forEach(function(search){
      makeRow();
      displayName(search.data[0].practices[0].name);
      displaySpecialtyname(search.data[0].specialties[0].name);
      displaySpecialtydesciption(search.data[0].specialties[0].description);
      displayPhone(search.data[0].practices[0].phones.number);
      displayWebsite(search.data[0].practices[0].website);
      displayDescription(search.data[0].practices[0].description);
      displayCity(search.data[0].practices[0].visit_address.street);
      displayCity(search.data[0].practices[0].visit_address.street2);
      displayCity(search.data[0].practices[0].visit_address.city);
      displayCity(search.data[0].practices[0].visit_address.state);
      displayCity(search.data[0].practices[0].visit_address.zip);
    });
  }).fail(function(error) {
    $('#row').append("<tr><td>not found</td></tr>");
  });
};


exports.searchdocModule = Searchdoc;
