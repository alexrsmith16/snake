//the game itself
//snake stuff
let snake = [{x: 10, y: 10}, {x: 10, y:11}, {x: 10, y: 12}];
let food = {x: 20, y: 10};
let tail = {};
let direction = "up";
let speed = 0;
let times = [1, 2, 5, 10, 20, 40, 100];
let score = 0;
let loopInterval = 1000;
let index = 0;
let loop;
let pause = false;
let lost = false;

function manageLoop() {
    clearInterval(loop);
    switch (speed) {
        case 0:
            loopInterval = 250;
            break;
        case 1:
            loopInterval = 200;
            break;
        case 2:
            loopInterval = 150;
            break;
        case 3:
            loopInterval = 100;
            break;
        case 4:
            loopInterval = 75;
            break;
        case 5:
            loopInterval = 50;
            break;
        case 6:
            loopInterval = 30;
            break;
        case 7:
            loopInterval = 15;
            break;
    }
    console.log(loopInterval);
    loop = setInterval(gameLoop, loopInterval);
}

manageLoop();

function gameLoop() {
    // console.log(index++);
    if (pause || lost) {
        clearInterval(loop);
    }
    else {
        go();
    }
}

function go() {
    moveSnake();
    checkEat();
    checkLose();
}

function moveSnake() {
    let holdx = snake[0].x;
    let holdy = snake[0].y;
    switch (direction) {
        case "up":
            snake[0].y -= 1;
            break;
        case "right":
            snake[0].x += 1;
            break;
        case "down":
            snake[0].y += 1;
            break;
        case "left":
            snake[0].x -= 1;
            break;
    }
    for (let i = 1; i < snake.length; i++) {
        let tempX = snake[i].x;
        let tempY = snake[i].y;
        snake[i].x = holdx;
        snake[i].y = holdy;
        holdx = tempX;
        holdy = tempY;
    }
    tail.x = holdx;
    tail.y = holdy;
}

function checkEat() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
        updateSpeed();
        snake.push({x: tail.x, y: tail.y});
        food.x = Math.floor(Math.random() * 45);
        food.y = Math.floor(Math.random() * 25);
    }
}

function checkLose() {
    let head = snake[0];
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            lostGame();
        }
    }
    if (head.x < 0 || head.x > 44 || head.y < 0 || head.y > 24) {
        lostGame();
    }
}

function lostGame() {
    lost = true;
    score += Math.floor(frames/20);
    score += (snake.length - 3) * 100;
    writeLost();
}

function updateSpeed() {
    if (times[speed] <= 0) {
        speed += 1;
        manageLoop();
    }
    else {
        times[speed] -= 1;
    }
}