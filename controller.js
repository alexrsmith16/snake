//user inputs
//listeners
let frames = 0;
function windowLoop() {
    // console.log(frames);
    write();
    ++frames;
    if (!pause || !lost) window.requestAnimationFrame(windowLoop);
}

windowLoop();


document.onkeydown = function(event) {
// console.log(event.key);
    if (!lost) {
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
                manageLoop();
                break;
        }
    }
};
