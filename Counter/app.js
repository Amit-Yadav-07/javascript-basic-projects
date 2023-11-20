
let count = 0;
const buttons = document.querySelectorAll('.btn');
const span = document.querySelector('#span');
console.log(buttons);

buttons.forEach((btn) => {

    btn.addEventListener('click', function (e) {
        let value = e.currentTarget;
        if (value.classList.contains('decrement')) {
            count--;
            span.textContent = count;

        } else if (value.classList.contains('increase')) {
            count++;
            span.textContent = count;

        } else {
            count = 0;
            span.textContent = count;

        }
        if (count < 0) {
            span.style.color = 'red';
        }
        if (count > 0) {
            span.style.color = 'green'
        }
        if (count == 0) {
            span.style.color = 'black'
        }
    })

})




