
const timeLeft = document.querySelector('.timer');



function renderTime() {
    let now = new Date();

    // Formating time to 00 format (9 -> 09)
    hour = ("0" +now.getHours()).slice(-2);
    minute = ("0" +now.getMinutes()).slice(-2);
    second = ("0" +now.getSeconds()).slice(-2);

    timeLeft.innerHTML = `${hour}:${minute}:${second}`;
}

setInterval(renderTime, 1000)



const menu = document.querySelector('#menu');

menu.addEventListener('click', () => console.log('haha'));
