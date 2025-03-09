// Simple validation for appointment form submission
document.getElementById('appointmentForm').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!name || !email || !doctor || !date || !time) {
        alert("Please fill out all fields.");
        e.preventDefault(); // Prevent form submission
    } else {
        alert("Appointment booked successfully!");
    }
});

// Simple validation for contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        e.preventDefault(); // Prevent form submission
    } else {
        alert("Message sent successfully!");
    }
});
