window.onload = function() {
    alert("Welcome to our food delivery website");

    
    let messageDisplayed = false;

    
    const navLinks = document.querySelectorAll('header .navigation a');

    navLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            if (!messageDisplayed) {
                alert("Use these options to know about us and get our services.");
                messageDisplayed = true;
            }
        });
    });
};
