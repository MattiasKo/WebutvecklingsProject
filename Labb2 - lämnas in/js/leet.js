const leet = ["", "", "", ""];
var modal = document.getElementById("myModal");
window.onclick = function (event) {
    modal.style.display = "none";
}
document.addEventListener("keypress", function onEvent(event) {
    if (event.key !== "") {
        leet[0] = leet[1];
        leet[1] = leet[2];
        leet[2] = leet[3];
        leet[3] = event.key;
    }
    if (leet[0] === "1" && leet[1] === "3" && leet[2] === "3" && leet[3] === "7") {
        modal.style.display = "block";
    }
});