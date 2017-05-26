var apiKey = require('./../.env').apiKey;

Searchdoc = function(){
};

Searchdoc.prototype.getSearchDocData = function(ailmentQuery, makeRow, makefirstColumn, displayTotal, displayFirstName, displayMiddleName, displayLastName, displayTitle, makeSecondColumn, displayPhone, makeThirdColumn, displaySpecialty) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailmentQuery + '&location=45.523%2C-122.676%2C100&user_location=45.523%2C-122.676&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
    displayTotal(response.data.length);
    console.log(response.data);
    console.log(response.data[0].practices);
    response.data.forEach(function(data){
      makeRow();
      makefirstColumn();
      displayFirstName(data.profile.first_name);
      displayMiddleName(data.profile.middle_name);
      displayLastName(data.profile.last_name);
      displayTitle(data.profile.title);
      makeSecondColumn();
      displayPhone(data.practices[0].phones[0].number)
      makeThirdColumn();
      displaySpecialty(data.specialties[0].name)
    });
  });
};





exports.searchdocModule = Searchdoc;
