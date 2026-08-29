
document.addEventListener('DOMContentLoaded', () => {

    var master = document.getElementById('video');
    var followers = document.querySelectorAll('.follower');
    master.addEventListener('timeupdate', () => {

        followers.forEach(video => {
           if (Math.abs(video.currentTime - master.currentTime) > 0.15) {
              video.currentTime = master.currentTime;
          }
        });
});
});


