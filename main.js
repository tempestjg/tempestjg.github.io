$(document).ready(function() {
  $.getJSON('example.json', function(data) {
    console.log('got:', data);
  })
  .done(function(payload) {
    console.log('done:', payload)
  })
  .fail(function(err) {
    console.log('failed:', err);
  });
});
