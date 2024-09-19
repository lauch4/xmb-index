document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('background-music');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const volumeControl = document.getElementById('volume-control');

  let isPlaying = false;

  // Set initial state for audio and volume
  audio.volume = volumeControl.value; // Set the initial volume based on the control
  audio.play(); // Attempt to play the audio once loaded
  
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

  // Ensuring audio starts when page interaction occurs (click anywhere)
  document.body.addEventListener('click', () => {
    if (!isPlaying) {
      audio.play();
      playPauseBtn.classList.remove('fa-play');
      playPauseBtn.classList.add('fa-pause');
      isPlaying = true;
    }
  });
});
