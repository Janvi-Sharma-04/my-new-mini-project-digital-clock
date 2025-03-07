document.addEventListener('DOMContentLoaded', (event) => {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const formatSwitchButton = document.getElementById('formatswitch');
    const toggleThemeButton = document.getElementById('toggletheme');
    
    let is24HourFormat = true;

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const day = now.getDate();
        const month = now.toLocaleString('default', { month: 'short' });
        const year = now.getFullYear();

        let period = '';
        if (!is24HourFormat) {
            period = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12; 
        }

        timeElement.textContent = `${String(hours).padStart(2, '0')}:
        ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${period}`;
        dateElement.textContent = `${month} ${day}, ${year}`;
    }

    formatSwitchButton.addEventListener('click', () => {
        is24HourFormat = !is24HourFormat;
        formatSwitchButton.textContent = is24HourFormat ? 'Switch to 12-Hour' : 'Switch to 24-Hour';
    });

    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.clock').classList.toggle('dark-mode');
    });

    
    setInterval(updateClock, 1000);
    updateClock(); 
});



