window.onload = function () {
    VANTA.FOG({
        el: "#background",
        mouseControls: false,  // Disable cursor interaction
        touchControls: false,  // Disable touch interaction
        gyroControls: false,   // Disable gyroscope movement
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
        highlightColor: 0x3B3A0A, // First color
        midtoneColor: 0x6B4A2C,   // Second color
        lowlightColor: 0x000000,   // Background color (black)
        baseColor: 0x000000,       // Base color (black)
        speed: 1.0,
        zoom: 1.0
    });
};

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let profilePic = document.getElementById("profilePic");
    let popup = document.getElementById("popup");
    let closePopup = document.getElementById("closePopup");

    if (popup) {
        popup.style.display = "none"; // Ensure it's hidden on page load
    }

    if (profilePic && popup && closePopup) {
        // Open the pop-up when clicking the profile picture
        profilePic.addEventListener("click", function () {
            popup.style.display = "flex";
        });

        // Close the pop-up when clicking the close button
        closePopup.addEventListener("click", function () {
            popup.style.display = "none";
        });

        // Close the pop-up when clicking outside the image
        popup.addEventListener("click", function (event) {
            if (event.target === popup) {
                popup.style.display = "none";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("click", function () {
            // Remove active class from other cards
            projectCards.forEach(c => {
                if (c !== card) c.classList.remove("active");
            });

            // Toggle the active class on the clicked project card
            card.classList.toggle("active");
        });
    });
});



