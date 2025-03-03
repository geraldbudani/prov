document.addEventListener("DOMContentLoaded", function () {
    let profilePic = document.getElementById("profilePic");
    let popup = document.getElementById("popup");
    let closePopup = document.getElementById("closePopup");

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
