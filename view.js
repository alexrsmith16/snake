//print to page
const GRID = document.getElementById("grid");
const LOST = document.getElementById("lost");
const SCORE = document.getElementById("score");
function write() {
    let element = "";
    for (let i = 0; i < 25; i++) {
        element += `<div id="row_${i}" class="row">`;
        for (let j = 0; j < 45; j++) {
            element += `<div id="${j}_${i}" class="cell"></div>`;
        }
        element += `</div>`;
    }
    GRID.innerHTML = element;
    for (let i in snake) {
        let segment = document.getElementById(snake[i].x + "_" + snake[i].y);
        segment.style.backgroundColor = "#FFFFFF";
        segment.style.borderLeftColor = "#FFFFFF";
        segment.style.borderTopColor = "#FFFFFF";
    }
    document.getElementById(food.x + "_" + food.y).style.backgroundColor = "#a41a1d";
}
write();

function writeLost() {
    LOST.style.display = "flex";
    SCORE.innerText = score;
}