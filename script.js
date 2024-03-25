window.onscroll = function() {
    var scrollMessage = document.getElementById('scrollMessage');
    if (window.pageYOffset > 50) { // Adjust if needed
        scrollMessage.style.display = 'none';
    } else {
        scrollMessage.style.display = 'block';
    }
};
document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audioClip');
    if(audio.paused){
        audio.play();
    }else{
        audio.currentTime = 0; // Optionally rewind to the start
        audio.pause();
    }
});
