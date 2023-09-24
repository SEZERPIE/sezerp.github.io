var doughnut = 0;
window.setInterval(
function () {
    doughnut = doughnut + 1;
    document.getElementById("doughnuts").innerHTML = "Ricardo wykopał: " + doughnut + " diaxów!";

}, 2550);