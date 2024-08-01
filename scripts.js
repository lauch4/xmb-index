const icons = document.querySelectorAll('.icon');
let currentIndex = 0;

function updateIcons() {
  icons.forEach((icon, index) => {
    icon.style.opacity = (index === currentIndex) ? '1' : '0.5';
    icon.style.transform = (index === currentIndex) ? 'scale(1.2)' : 'scale(1)';
  });
}

function handleKeydown(event) {
  if (event.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % icons.length;
    updateIcons();
  } else if (event.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + icons.length) % icons.length;
    updateIcons();
  }
}

// Assuming icons is a NodeList of your icons, similar to the one used in updateIcons()

icons.forEach((icon, index) => {
    icon.addEventListener('mouseenter', () => {
      currentIndex = index; // Update currentIndex to the hovered icon's index
      updateIcons(); // Update the visual state
    });
  });
  

document.addEventListener('keydown', handleKeydown);

// Initial setup
updateIcons();




//Audio


document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('background-music');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const volumeControl = document.getElementById('volume-control');

  let isPlaying = false;

  // Set initial state
  playPauseBtn.classList.add('fa-play'); // Initial icon state

    // Set default volume to minimum
    audio.volume = 0.1;
    volumeControl.value = 0.1;

  // Play/pause functionality
  playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      playPauseBtn.classList.remove('fa-pause');
      playPauseBtn.classList.add('fa-play');
    } else {
      audio.play();
      playPauseBtn.classList.remove('fa-play');
      playPauseBtn.classList.add('fa-pause');
    }
    isPlaying = !isPlaying;
  });

  // Volume control
  volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
  });

  // Auto-play the music when the page loads
  audio.play();
  playPauseBtn.classList.remove('fa-play');
  playPauseBtn.classList.add('fa-pause');
  isPlaying = true; // Set initial play state
});



