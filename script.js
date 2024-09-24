document.getElementById("surpriseButton").addEventListener("click", function() {
    const messages = [
        "..I Love You Boishakhi..",
        "❤️ You make my heart smile! ❤️",
        "🌹 Every moment with you is precious! 🌹",
        "💖 You are my sunshine on a cloudy day! 💖",
        "🌟 I cherish every moment spent with you! 🌟",
        "💞 Together, we can conquer the world! 💞"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("message").innerText = messages[randomIndex];
});
