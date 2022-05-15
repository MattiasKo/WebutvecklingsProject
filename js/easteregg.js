document.getElementById("changepic").onclick = function () { changepic() };

function changepic() {
    document.getElementById("changepic").src = "/pictures/knightupp.png";
    document.getElementById("info").innerHTML = "Andra projekt kommer i framtiden!"
    document.body.style.backgroundColor = "rgb(100, 0, 0)";
    document.getElementById("grad").style.backgroundImage = "linear-gradient(rgb(255, 150, 0), rgb(100, 0, 0))";
    var containercolor = document.getElementsByClassName("flexcontainer");
    for (var i = 0; i < containercolor.length; i++) {
        containercolor[i].style.backgroundColor = "rgb(255, 75, 0)";
    }
    function changecolortheme() {
        var elementcolor = document.getElementsByClassName("theme");
        for (var i in elementcolor) {
            elementcolor[i].style.color = "rgb(255, 150, 0)";
        }
    }
    changecolortheme();
}