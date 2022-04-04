

function click_errado () {
    var el = document.getElementById("r3-d4");
    el.classList.add("br-cell-wrong");
    el.classList.remove("br-cell-right");
    el.classList.remove("br-cell-position");
}

function click_correto () {
    var el = document.getElementById("r3-d4");
    el.classList.remove("br-cell-wrong");
    el.classList.add("br-cell-right");
    el.classList.remove("br-cell-position");
}

function click_posição () {
    var el = document.getElementById("r3-d4");
    el.classList.remove("br-cell-wrong");
    el.classList.remove("br-cell-right");
    el.classList.add("br-cell-position");
}