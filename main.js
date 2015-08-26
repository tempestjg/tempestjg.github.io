$(document).ready(function() {
  $.getJSON('example.json', function(data) {
    console.log('getJSON test');
    console.log(data);
  });
});
