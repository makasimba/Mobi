
function submitForm() {
  // Get the form element
  var form = document.querySelector('form');

  // Send a POST request to the server
  fetch('/submit-form', {
    method: 'POST',
    body: new FormData(form)
  })
  .then(function(response) {
    // Handle the response from the server
    console.log(response);
  })
  .catch(function(error) {
    // Handle errors that occur during the request
    console.error(error);
  });
}