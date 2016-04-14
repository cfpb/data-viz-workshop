var PARAMS = 
  "$where=starts_with(zip_code, '191')";
  // add more params here
  // find more params in the API docs: https://dev.socrata.com/docs/queries/

var xhr = new XMLHttpRequest();
var URL = 'https://data.consumerfinance.gov/resource/jhzv-w97w.json?' + PARAMS;

xhr.open('GET', URL);

xhr.send(null);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      onSuccess(xhr.responseText);
    } else {
      console.log('Error: ' + xhr.status);
    }
  }
};
    

var onSuccess = function(response) {

  // exercise 1
  var complaints = response && JSON.parse(response);
  console.log(complaints[0]);
  
  // exercise 1
  for (var i = 0; i < complaints.length; i++) {
    // console.log(complaints[i]);
    // exercise 2
    var complaint = complaints[i];
    if (complaint.complaint_what_happened) {
      var narrative = document.createTextNode(complaint.complaint_what_happened);
      // console.log(narrative);
      var page = document.querySelector('#data');
      var paragraph = document.createElement('p');
      paragraph.appendChild(narrative);
      page.appendChild(paragraph);
    }
  }

  
};