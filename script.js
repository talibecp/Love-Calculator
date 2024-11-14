document.getElementById("loveForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the names
    var yourName = document.getElementById("your-name").value.trim();
    var partnerName = document.getElementById("partner-name").value.trim();

    // Check if names are provided
    if (yourName === "" || partnerName === "") {
        alert("Please enter both names.");
        return;
    }

    // Calculate love percentage (simple algorithm)
    var lovePercentage = Math.floor(Math.random() * 100) + 1;

    // Display the result
    var loveMessage = getLoveMessage(lovePercentage);
    
    document.querySelector(".percentage").textContent = lovePercentage + "%";
    document.querySelector(".love-message").textContent = loveMessage;
});

// Function to get love message based on percentage
function getLoveMessage(percentage) {
    if (percentage > 80) {
        return "You two are made for each other! 💖";
    } else if (percentage > 50) {
        return "A strong bond is forming! 💕";
    } else if (percentage > 30) {
        return "There's some love here, but it could grow. 💗";
    } else {
        return "Maybe you need to work on it more! 💔";
    }
}
