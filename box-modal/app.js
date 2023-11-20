const open_btn = document.querySelector('#open-btn');
const show_modal = document.querySelector('.show-modal');
const closeBtn = document.querySelector('#closeBtn');


open_btn.addEventListener('click', function () {
    show_modal.classList.add('modal-container');

})

closeBtn.addEventListener('click', function () {
    show_modal.classList.remove('modal-container');
})

