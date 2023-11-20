let video = document.querySelector('.video-container');
let btn = document.querySelector('.switch-btn');


btn.addEventListener('click', function () {
    if (!btn.classList.contains('switch')) {
        btn.classList.add('switch');

        video.pause();

    } else {
        btn.classList.remove('switch');
        video.play();

    }
})

let preloader = document.querySelector('.preloader');

window.addEventListener('load', function () {

    preloader.classList.add('hide-preloader')
})