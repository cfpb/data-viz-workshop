var PARAMS = 
  "$where=starts_with(zip_code, '191')";
  // add more params here


// var jqxhr = $.ajax({
//   url: 'https://data.consumerfinance.gov/resource/jhzv-w97w.json?' + PARAMS
// })
//   .done(function(data) {
//       // success
//       console.log(data[0])
//       $(data).each(function() {
//         // print on page
//         if (this.complaint_what_happened) {
//           var narrative = this.complaint_what_happened;
//           $('body').append('<p>' + narrative + '</p>');
//         }

//         // make a word cloud

//       });
//   })
//   .fail(function() {
//     // error
//   })
//   .always(function() {
//     // complete
//   });


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
  console.log(response);
  // for (var i = 0; i < response.length; i++) {
  //   console.log(response[i]);
  // }
  // if (this.complaint_what_happened) {
  //   var narrative = this.complaint_what_happened;
  //   $('body').append('<p>' + narrative + '</p>');
  // }
};