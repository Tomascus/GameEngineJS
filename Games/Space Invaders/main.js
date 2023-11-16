const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function update(){

}

function draw() {

}

function gameLoop() {
    if(isGameOver()){
        alert("Game Over");
        return;
    }

    update();
    draw();

    requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

