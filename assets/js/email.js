// assets/js/email.js
function sendMail()
    // Get values from the form
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send email using EmailJS
    emailjs.send("contact_service", "contact_form", params)
        .then(function(response) {
            alert("Email Successfully Sent");
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            alert("Oops, something went wrong. Please try again later.");
            console.error("FAILED...", error);
        });

    // Clear the form fields after sending
    document.getElementById('contact-form').reset();
}
