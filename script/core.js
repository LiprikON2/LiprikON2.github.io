// CLOCK
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




// DESKTOP VERSION REQUEST

document.querySelector('.desktop').addEventListener('click', function () {
    console.log("click");
    document.querySelector(".head-wrap").classList.add("full");
});



// SIDEBAR
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "700px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

