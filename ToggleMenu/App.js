const icon = document.getElementById('icon');
const links = document.querySelector('.links');
const toggle = document.querySelector('.fa-bars');
const media = document.querySelector('.media');

icon.addEventListener('click', function () {

    links.classList.toggle('show-links');
    media.classList.toggle('media');
    toggle.classList.toggle('fa-xmark');

})
