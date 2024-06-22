function sendMail() {
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send("contact_services", "contact_form", params)
        .then(function(response) {
            alert("Email Successfully Sent");
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            alert("Oops, something went wrong. Please try again later.");
            console.error("FAILED...", error);
        });
}
