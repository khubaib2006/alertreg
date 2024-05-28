document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        if (!confirm("Are you sure? You want to submit the form")) {
            event.preventDefault();
        }
    });
});
