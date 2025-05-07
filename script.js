document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    if (username.trim() !== "") {
        document.getElementById("userDisplay").textContent = username;
        document.getElementById("dashboard").style.display = "block";
        document.querySelector(".login-container").style.display = "none";
    } else {
        alert("Ampidiro anarana marina!");
    }
});

document.getElementById("logoutBtn").addEventListener("click", function() {
    document.getElementById("dashboard").style.display = "none";
    document.querySelector(".login-container").style.display = "block";
});