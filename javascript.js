var colors = ["Bisque", "GhostWhite", "LightGoldenRodYellow", "Moccasin", "PeachPuff", "SeaShell", "WhiteSmoke", "PaleGoldenRod"]

function changeColor() {
    var color = document.getElementById("html");
    color.style.backgroundColor = colors[Math.floor((Math.random()*8)+1)];
}
