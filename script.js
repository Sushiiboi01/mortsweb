function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    // Convert to Philippines time (UTC+8)
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Manila'
    };
    clock.textContent = now.toLocaleTimeString('en-US', options);
}

setInterval(updateClock, 1000);
updateClock(); 