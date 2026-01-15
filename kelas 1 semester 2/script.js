// Main JavaScript file for Jadwal Pelajaran
document.addEventListener('DOMContentLoaded', function() {
    console.log('Jadwal Pelajaran loaded successfully! 📚');
    
    // Add interactive features if needed in the future
    const dayCards = document.querySelectorAll('.day-card');
    
    dayCards.forEach(card => {
        card.addEventListener('click', function() {
            // Optional: Add click interaction
            console.log('Day card clicked:', this.querySelector('.day-name').textContent);
        });
    });
});