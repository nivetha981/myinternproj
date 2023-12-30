function subscribe() {
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var email = document.getElementById('email').value;
 
  if (name == "" || age == "" || email == "") {
     alert("Please fill in all the fields!");
  } else {
     document.getElementById('confirmationMessage').style.display = 'block';
  }
 }