document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    if (username) {
        document.getElementById("userDisplay").textContent = username;
        document.getElementById("dashboard").style.display = "block";
    }
});