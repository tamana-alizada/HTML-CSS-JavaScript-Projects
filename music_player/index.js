const song = document.getElementById('song');
const progress = document.getElementById('progress');
const ctrlIcon = document.getElementById('ctrlIcon');

song.onloadedmetadata = function () {
  progress.value = song.currentTime;
  progress.max = song.duration;
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add('fa-pause');
  ctrlIcon.classList.remove('fa-play');
}


setInterval(() => {
  progress.value = song.currentTime;
}, 500);

function playPause() {
  if (ctrlIcon.classList.contains('fa-play')) {
    song.play();
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
  } else {
    song.pause();
    ctrlIcon.classList.remove('fa-pause');
    ctrlIcon.classList.add('fa-play');
  }

}

