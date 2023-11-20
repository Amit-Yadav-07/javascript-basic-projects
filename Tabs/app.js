const buttons = document.querySelectorAll('.btn');
const content_info = document.querySelectorAll('.information');
const about = document.querySelector('.about');

about.addEventListener('click', function (element) {
    let id = element.target.dataset.id;
    if (id) {
        buttons.forEach((btn) => {
            btn.classList.remove('btn-active');
            element.target.classList.add('btn-active');
        });
        content_info.forEach((info) => {
            info.classList.remove('content-active')
        });

        let ele = document.getElementById(id);
        ele.classList.add('content-active');
    }
})