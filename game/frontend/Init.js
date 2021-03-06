//создаём мир
overworld = new Overworld({
    element: document.querySelector(".game-container")
});
//инициализируем мир (1 lvl)
overworld.init(window.OverworldMaps.lev1);

//вносим тестовый пример в <textarea>
var startCode = "Naruto.moveDown()\nNaruto.moveRight(5);"
document.querySelector(".code-area").value = startCode;

//если нажмём на кнопку
var startButton = document.querySelector(".start");
startButton.addEventListener("click", async function(event) {

    startButton.disabled = true;

    var code = document.querySelector(".code-area").value;
    //стартуем скрипт
    await overworld.startScript(CodeConverter.convert(code));
    
    startButton.disabled = false;

})