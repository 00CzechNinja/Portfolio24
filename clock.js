function updateClock() {
    const clock = document.getElementById("clock");
    const options = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false, // Use 24-hour format
    };
    
    // Set the timezone to 'Europe/Prague'
    const timeZone = 'Europe/Prague';
    
    // Get the current time in the specified timezone
    const now = new Date();
    const timeString = new Intl.DateTimeFormat('en-US', { ...options, timeZone }).format(now);
    
    clock.textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();
