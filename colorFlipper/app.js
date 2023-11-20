const colors = ['rgba(255, 0, 0)', 'yellow', '#800080', 'blue', 'green'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
//console.log(color);
btn.addEventListener('click', function () {
    // console.log('clicked');
    let randomNumber = getRandomNumber();
    // console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}