const aside = document.querySelector('.aside');
const toggleBtn = document.querySelector('.btn');
const crossBtn = document.querySelector('.fa-xmark');


toggleBtn.addEventListener('click', function () {
    aside.classList.toggle('show-sidebar')
})

crossBtn.addEventListener('click', function () {
    aside.classList.remove('show-sidebar');
})

