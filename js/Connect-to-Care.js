var apiKey = require('./../.env').apiKey;

Searchdoc = function(){
};

Searchdoc.prototype.getSearchDocData = function(ailmentQuery, makeRow, makefirstColumn, displayTotal, displayFirstName, displayMiddleName, displayLastName, displayTitle) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailmentQuery + '&location=45.523%2C-122.676%2C100&user_location=45.523%2C-122.676&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
    displayTotal(response.data.length);
    response.data.forEach(function(data){
      makeRow();
      makefirstColumn();
      displayFirstName(data.profile.first_name);
      displayMiddleName(data.profile.middle_name);
      displayLastName(data.profile.last_name);
      displayTitle(data.profile.title);

    console.log(response.data.length);
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
