$(document).ready(function() {
  $.getJSON('example.json', function(data) {
    console.log('getJSON test');
    console.log(data);
  })
  .fail(function(err) {
    console.log('failed:', err);
  });
});
