const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

const weeks = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];


let deadline = document.querySelectorAll('.deadline');

let giveaway = document.querySelector('.gift-info h4');
let items = document.querySelectorAll('.deadline h3');
// console.log(items, deadline, giveaway);

let tempDate = new Date();

let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let futureDate = new Date(tempYear, tempMonth, tempDay + 10);

//let futureDate = new Date(2023, 9, 15, 8, 0, 0);
//console.log(futureDate);

let year = futureDate.getFullYear();
let min = futureDate.getMinutes();
let hours = futureDate.getHours();

let week = futureDate.getDay();
week = weeks[week]

let month = futureDate.getMonth();
month = months[month];
//console.log(month);

let date = futureDate.getDate();
// console.log(date);



giveaway.textContent = `Giveaway Ends On ${week} ${date} ${month} ${year} ${hours}: ${min} am`;

// currentTime in ms

let futureTime = futureDate.getTime();

// console.log(futureTime);


function getRemainingTime() {

    let today = new Date().getTime();
    // console.log(today);
    let t = futureTime - today;
    //console.log(t);

    // 1s = 1000ms
    // 1min = 60s,
    // 1hr = 60min,
    // 1day = 24hr

    // values in ms 
    let oneDay = 24 * 60 * 60 * 1000;
    let oneHours = 60 * 60 * 1000;
    let oneMin = 60 * 1000;

    let days = t / oneDay
    days = Math.floor(days)

    let hours = Math.floor((t % oneDay) / oneHours);
    let minutes = Math.floor((t % oneHours) / oneMin);
    let seconds = Math.floor((t % oneMin) / 1000);

    let values = [days, hours, minutes, seconds];

    function format(item) {

        if (item < 10) {
            return `0${item}`;
        } else {
            return item;
        }
    }

    items.forEach(function (value, index) {

        value.innerHTML = format(values[index]);
    });

    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4>sorry, this giveaway has expired </h4>`
    }

    // interval

}
let countdown = setInterval(getRemainingTime, 1000);


getRemainingTime();