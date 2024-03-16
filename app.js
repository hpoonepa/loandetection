document.getElementById('loanForm').addEventListener('submit', function(event){
  event.preventDefault();

  // Collect form data
  var formData = {
      gender: document.getElementById('gender').value,
      married: document.getElementById('married').value,
      // Collect other form fields in a similar manner
  };

  // Placeholder for loan status check (usually involves sending formData to a server)
  console.log(formData); // Replace this with actual API call

  // Display result (mockup, replace with actual result handling)
  document.getElementById('result').innerHTML = 'Loan Status: ' + (Math.random() < 0.5 ? 'Approved' : 'Rejected');
});
function secondScreen() {
  window.location.replace("form.html");
}
function firstscreen() {
  window.location.replace("index.html");
}


