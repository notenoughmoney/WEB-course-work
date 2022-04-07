overworld = new Overworld({
    element: document.querySelector(".game-container")
});
overworld.init();

const startButton = document.querySelector(".start");
startButton.addEventListener("click", function(event) {
    overworld.startGame();
})