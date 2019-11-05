//user inputs
//listeners
let frames = 0;
let pause = false;
let lost = false;
function gameLoop() {
    console.log(frames);
    if(speed > 1) {
        if (frames % speed === 0) {
            go();
        }
    }
    else if(speed === 1) {
        let interval = frames % 3;
        switch (interval) {
            case 0:
                setTimeout(go, 5);
                break;
            case 1:
                setTimeout(go, 11);
                break;
        }
    }
    else {
        go();
    }
    write();
    ++frames;
    if (!pause && !lost) window.requestAnimationFrame(gameLoop);
}

gameLoop();
function go() {
    moveSnake();
    checkEat();
    checkLose();
}


document.onkeydown = function(event) {
// console.log(event.key);
    switch (event.key) {
        case "ArrowUp":
            event.preventDefault();
            direction = "up";
            break;
        case "ArrowRight":
            event.preventDefault();
            direction = "right";
            break;
        case "ArrowDown":
            event.preventDefault();
            direction = "down";
            break;
        case "ArrowLeft":
            event.preventDefault();
            direction = "left";
            break;
        case " ":
            pause ? pause = false : pause = true;
            gameLoop();
            break;
    }
};
