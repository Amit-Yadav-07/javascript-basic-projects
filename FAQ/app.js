const btn_1 = document.querySelector('.btn-1');
const btn_2 = document.querySelector('.btn-2');
const btn_3 = document.querySelector('.btn-3');
const answers_1 = document.querySelector('.answer-container-one');
const answers_2 = document.querySelector('.answer-container-two');
const answers_3 = document.querySelector('.answer-container-three');







btn_1.addEventListener('click', function (e) {
    if (answers_2.classList.contains('show-answer') || answers_3.classList.contains('show-answer')) {
        answers_2.classList.remove('show-answer');
        answers_3.classList.remove('show-answer');
        answers_1.classList.toggle('show-answer');
        //  console.log(e.target.classList.toggle('fa-minus'));
    } else {

        // if (plus.classList.contains('fa-plus')) {
        //     plus.classList.remove('fa-plus');
        //     plus.classList.add('fa-minus');
        // } else {
        //     plus.classList.remove('fa-minus');
        //     plus.classList.add('fa-plus');
        // }

        answers_1.classList.toggle('show-answer');

    }
})

btn_2.addEventListener('click', function (e) {
    if (answers_1.classList.contains('show-answer') || answers_3.classList.contains('show-answer')) {
        answers_1.classList.remove('show-answer');
        answers_3.classList.remove('show-answer');
        answers_2.classList.toggle('show-answer');
    } else {


        answers_2.classList.toggle('show-answer');

    }
})


btn_3.addEventListener('click', function (e) {
    if (answers_1.classList.contains('show-answer') || answers_2.classList.contains('show-answer')) {
        answers_1.classList.remove('show-answer');
        answers_2.classList.remove('show-answer');
        answers_3.classList.toggle('show-answer');

    } else {
        answers_3.classList.toggle('show-answer');

    }
})



// btn_1.addEventListener('click', function () {
//     answers_1.classList.toggle('show-answer');
//     if (plus.classList.contains('fa-plus')) {
//         plus.classList.remove('fa-plus');
//         plus.classList.add('fa-minus');
//     } else {
//         plus.classList.remove('fa-minus');
//         plus.classList.add('fa-plus');
//     }


// })


// window.addEventListener('resize', function () {
//     console.log(this.innerWidth);;
// })