let currentPage = 1;
const totalPages = 3;
const audio = document.getElementById('myAudio');

// Event listeners for both click and touchstart events
document.addEventListener('click', playAudio);
document.addEventListener('touchstart', playAudio);

function playAudio() {
    // Check if audio is paused before playing
    if (audio.paused) {
        audio.play()
            .then(() => {
                console.log('Audio playback started successfully.');
            })
            .catch(error => {
                console.error('Audio playback error:', error);
            });
    }

    // Remove event listeners to prevent multiple play attempts
    document.removeEventListener('click', playAudio);
    document.removeEventListener('touchstart', playAudio);
}

function flipPage(direction) {
    document.getElementById(`page${currentPage}`).classList.remove('show');
    if (direction === 'next' && currentPage < totalPages) {
        currentPage++;
    } else if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    }
    document.getElementById(`page${currentPage}`).classList.add('show');
}

document.addEventListener('DOMContentLoaded', () => {
    toggleFullScreen();
    document.getElementById(`page${currentPage}`).classList.add('show');
});

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
}
