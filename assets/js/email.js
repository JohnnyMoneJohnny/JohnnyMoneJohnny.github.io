function sendMail(){
  let parms = {
    name : document.getElementById('name').value,
    email : document.getElementById('email').value,
    message : document.getElementById('message').value
  }
  
  emailjs.send("contact_services","contact_form", parms).then(alert("Email Succesfully Sent"))
}
