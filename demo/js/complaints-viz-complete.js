var PARAMS =
  "$where=starts_with(zip_code, '191')";
  // add more params here
  // find more params in the API docs: https://dev.socrata.com/docs/queries/
//var URL = 'https://data.consumerfinance.gov/resource/jhzv-w97w.json?' + PARAMS;

var i = 0;

var bankURL = 'https://data.consumerfinance.gov/resource/jhzv-w97w.json?zip_code=11201&product=Bank account or service';
var creditURL = 'https://data.consumerfinance.gov/resource/jhzv-w97w.json?zip_code=11201&product=Credit reporting';
var mortgageURL = 'https://data.consumerfinance.gov/resource/jhzv-w97w.json?zip_code=11201&product=Mortgage';
var studentURL = 'https://data.consumerfinance.gov/resource/jhzv-w97w.json?zip_code=11201&product=Student loan';

var complaintdata = [];

var request = function(requestURL) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', requestURL);
  xhr.send(null);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        getComplaintTotal(xhr.responseText);
        i++;
        makeChart(requestURL);
      } else {
        console.log('Error: ' + xhr.status);
      }
    }
  };
}

request(bankURL);
request(creditURL);
request(mortgageURL);
request(studentURL);




var getComplaintTotal = function(response) {
  var complaints = response && JSON.parse(response);
  console.log(complaintdata);
  complaintdata.push(complaints.length);
}

var onSuccess = function(response) {

  // exercise 1
  var complaints = response && JSON.parse(response);
  // console.log(complaints[0]);
  console.log(complaints.length);
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

var makeChart = function(url) {
  console.log(complaintdata, url);
  if (i >= 4) {
  var complaintCount = complaintdata[i];
  d3.select("#data").selectAll("div")
    .data(complaintdata)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
        var barHeight = d * 5;
        return barHeight + "px";
    });
  }
}
