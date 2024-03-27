window.onload = function() {
    var image = document.getElementById('image');

    // Function to handle click on "No" button
    function handleNoButtonClick() {
        // Change image to placeholder image 2
        image.src = "Images/rikolies.png";

        // Restore original image after 3 seconds
        setTimeout(function() {
            image.src = "Images/reina blank.png";
        }, 3000);

        // Show popup message after a short delay
        setTimeout(function() {
            alert("If Matsuda Rina guesses, I agree.\nIf Matsuda Rina talks, I listen.\nIf Matsuda Rina makes a mistake, I forgive.\nIf Matsuda Rina is thinking, I admire.\nIf Matsuda Rina has 10 fans, I am one of them.\nIf Matsuda Rina has 1 fan, I am that fan.\nIf Matsuda Rina has no fans, I no longer exist.\nIf the world is against Matsuda Rina, I am against the world.");
        }, 500); // Adjust delay as needed
    }

    // Attach click event listener to "No" button
    var noBtn = document.getElementById('noBtn');
    noBtn.addEventListener('click', handleNoButtonClick);
};
