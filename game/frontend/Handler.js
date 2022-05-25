class Handler {

    static sexyJutsuHandler = async(e) => {
        if (e.detail.where.name == 6) {
            if (e.detail.what == "sexyJutsu") {
                await e.detail.where.overworld.Itachi.moveRight(2);
                await e.detail.where.overworld.Itachi.moveLeft(1);
                await e.detail.where.overworld.Itachi.moveRight(1);
                await e.detail.where.overworld.Itachi.moveLeft(1);
                await e.detail.where.overworld.Itachi.moveRight(1);

                // выдаём ачивку
                const eventSexy = new CustomEvent("Sexy");
                document.addEventListener("Sexy", AchieveHandler.sexyHandler);
                document.dispatchEvent(eventSexy);

                e.detail.where.startCutscene([
                    {type: "delTextMessage"},
                    {type: "textMessage", text: "Ты победил Итачи и прошёл игру!"}
                ]);
            }
        }
    }

    // переменные для хранения челиков, которые приняли участие в битве 5 уровня
    static killedBy1 = "";
    static killedBy2 = "";
    static killedBy3 = "";

    static hitHandler = e => {

        // функции для удобства (такой кринж)
        const isEverybodyDead = (e) => {
            if (e.detail.where.gameObjects.enemy1.dead && 
                e.detail.where.gameObjects.enemy2.dead &&
                e.detail.where.gameObjects.enemy3.dead
            ) return true;
            else return false;
        }

        const berserkChecker = () => {
            if (Handler.killedBy1 == Handler.killedBy2 && Handler.killedBy1 == Handler.killedBy3) return true;
            else return false; 
        }

        const teamChecker = () => {
            if (Handler.killedBy1 != Handler.killedBy2 && Handler.killedBy2 != Handler.killedBy3 && Handler.killedBy3 != Handler.killedBy1) return true;
            else return false; 
        }

        const anyAchieveChecker = (e) => {
            if (isEverybodyDead(e)) {
                if (berserkChecker()) {
                    console.log("gotit");
                    //выдаём берсерка
                    const eventBerserk = new CustomEvent("Berserk");
                    document.addEventListener("Berserk", AchieveHandler.berserkHandler);
                    document.dispatchEvent(eventBerserk);
                }
                if (teamChecker()) {
                    //выдаём мушкетёра
                    const eventTeam = new CustomEvent("Team");
                    document.addEventListener("Team", AchieveHandler.teamHandler);
                    document.dispatchEvent(eventTeam);
                }
            }
        }

        const rat = () => {
            //выдаём крысу
            const eventRat = new CustomEvent("Rat");
            document.addEventListener("Rat", AchieveHandler.ratHandler);
            document.dispatchEvent(eventRat);
        }

        if (e.detail.where.name == 4) {
            if (JSON.stringify(e.detail.pos) == JSON.stringify([4, 2]) && e.detail.what == "hitRight") {
                e.detail.where.overworld.Enemy1.die();
            }
            if (JSON.stringify(e.detail.pos) == JSON.stringify([6, 2]) && e.detail.what == "hitLeft") {
                e.detail.where.overworld.Enemy1.die();
                rat();
            }
        }
        if (e.detail.where.name == 5) {
            if (JSON.stringify(e.detail.pos) == JSON.stringify([4, 2]) && e.detail.what == "hitRight") {
                e.detail.where.overworld.Enemy1.die();
                Handler.killedBy1 = e.detail.who.name;
                anyAchieveChecker(e);                
            }
            if (JSON.stringify(e.detail.pos) == JSON.stringify([4, 3]) && e.detail.what == "hitRight") {
                e.detail.where.overworld.Enemy2.die();
                Handler.killedBy2 = e.detail.who.name;
                anyAchieveChecker(e);                
            }
            if (JSON.stringify(e.detail.pos) == JSON.stringify([4, 4]) && e.detail.what == "hitRight") {
                e.detail.where.overworld.Enemy3.die();
                Handler.killedBy3 = e.detail.who.name;
                anyAchieveChecker(e);                
            }
            if (JSON.stringify(e.detail.pos) == JSON.stringify([6, 2]) && e.detail.what == "hitLeft") {
                e.detail.where.overworld.Enemy1.die();
                Handler.killedBy1 = e.detail.who.name;
                anyAchieveChecker(e);      
                rat();          
            }
            if (JSON.stringify(e.detail.pos) == JSON.stringify([6, 3]) && e.detail.what == "hitLeft") {
                e.detail.where.overworld.Enemy2.die();
                Handler.killedBy2 = e.detail.who.name;
                anyAchieveChecker(e);     
                rat();           
            }
            if (JSON.stringify(e.detail.pos) == JSON.stringify([6, 4]) && e.detail.what == "hitLeft") {
                e.detail.where.overworld.Enemy3.die();
                Handler.killedBy3 = e.detail.who.name;
                anyAchieveChecker(e);    
                rat();            
            }
        }
        if (e.detail.where.name == 6) {
            if (JSON.stringify(e.detail.pos) == JSON.stringify([4, 2]) && e.detail.what == "hitRight" || 
                JSON.stringify(e.detail.pos) == JSON.stringify([6, 2]) && e.detail.what == "hitLeft") {
                    e.detail.where.startCutscene([
                        {type: "delTextMessage"},
                        {type: "textMessage", text: "Техника такого уровня не действует на Итачи"},
                        {type: "textMessage", text: "Чтобы победить Итачи, используйте Naruto.sexyJutsu();"}
                    ]);
                e.detail.where.overworld.Naruto.die();
            }
        }
    }

    static sceneInitHandler = e => {
        if (e.detail.where.name == 1) {
            e.detail.where.startCutscene([
                {type: "textMessage", text: "Управляй Наруто с помощью методов: moveRight(), moveUp() и т.д."},
                {type: "textMessage", text: "Например, Naruto.moveDown(3) передвинет Наруто на 3 клетки вниз."},
                {type: "textMessage", text: "Для всех методов аргумент по умолчанию - 1"},
                {type: "textMessage", text: "Также доступны циклы и условия JS"}
            ]);
        }
        if (e.detail.where.name == 2) {
            e.detail.where.startCutscene([
                {type: "delTextMessage"},
                {type: "textMessage", text: "Не утони!"}
            ]);
            completedLevels = 2;
        }
        if (e.detail.where.name == 3) {
            e.detail.where.startCutscene([
                {type: "delTextMessage"},
                {type: "textMessage", text: "А ты уже смотрел аниме?"},
                {type: "textMessage", text: "У Наруто есть друзья..."},
                {type: "textMessage", text: "Розовая - Сакура (Sakura), синий - Саске (Sasuke)"},
                {type: "textMessage", text: "Они имеют аналогичное управление"},
                {type: "textMessage", text: "А теперь попробуй решить головоломку"},
                {type: "textMessage", text: "Сделай так, чтобы Наруто встал на стрелочку"},
            ]);
            completedLevels = 3;
        }
        if (e.detail.where.name == 4) {
            e.detail.where.startCutscene([
                {type: "delTextMessage"},
                {type: "textMessage", text: "Победи ниндзя песка"},
                {type: "textMessage", text: "Подойди к нему вплотную и ударь его, используя метод hitRight();"},
            ]);
            completedLevels = 4;
        }
        if (e.detail.where.name == 5) {
            e.detail.where.startCutscene([
                {type: "delTextMessage"},
                {type: "textMessage", text: "Победи нескольких ниндзя песка"},
                {type: "textMessage", text: "Не забывай, что у тебя есть друзья!"},
            ]);
            completedLevels = 5;
        }
        if (e.detail.where.name == 6) {
            e.detail.where.startCutscene([
                {type: "delTextMessage"},
                {type: "textMessage", text: "Победи Итачи"},
            ]);
            completedLevels = 6;
        }
    }

    static moveHandler = e => {
        if (e.detail.where.name == 1) {
            if (JSON.stringify(e.detail.pos) == JSON.stringify([7, 3])) { 
                e.detail.where.startCutscene([
                    {type: "changeMap", map: "lev2"}
                ]);
                document.querySelector(".code-area").value = "";
                // make available
                document.getElementById("l2").classList.remove("disabled");
                if (getCookie("username") != undefined) postLevel(getCookie("username"), 2);
            }
        }
        if (e.detail.where.name == 2) {
            if (JSON.stringify(e.detail.pos) == JSON.stringify([9, 3])) { 
                e.detail.where.startCutscene([
                    {type: "changeMap", map: "lev3"}
                ]);
                document.querySelector(".code-area").value = "";
                document.getElementById("l3").classList.remove("disabled");
                if (getCookie("username") != undefined) postLevel(getCookie("username"), 3);
            }
        }
        if (e.detail.where.name == 3) {
            if (JSON.stringify(e.detail.pos) == JSON.stringify([4, 3]) && e.detail.who.name == "Naruto") {

                const event3rdLevDone = new CustomEvent("3rdLevDone");
                document.addEventListener("3rdLevDone", AchieveHandler.thirdLevHandler);
                document.dispatchEvent(event3rdLevDone); 
                
                e.detail.where.startCutscene([
                    {type: "changeMap", map: "lev4"}
                ]);
                document.querySelector(".code-area").value = "";
                document.getElementById("l4").classList.remove("disabled");
                if (getCookie("username") != undefined) postLevel(getCookie("username"), 4);
            }
        }
        if (e.detail.where.name == 4) {
            if (JSON.stringify(e.detail.pos) == JSON.stringify([8, 2])) {

                // если мы не убили, а обошли челика, то кинем ачивку
                if (JSON.stringify(e.detail.where.gameObjects.enemy1.getCurPos()) != JSON.stringify([-1, -1])) {
                    const eventTrick = new CustomEvent("Trick");
                    document.addEventListener("Trick", AchieveHandler.trickHandler);
                    document.dispatchEvent(eventTrick);
                }

                e.detail.where.startCutscene([
                    {type: "changeMap", map: "lev5"}
                ]);
                document.querySelector(".code-area").value = "";
                document.getElementById("l5").classList.remove("disabled");
                if (getCookie("username") != undefined) postLevel(getCookie("username"), 5);
            }
        }
        if (e.detail.where.name == 5) {
            if (JSON.stringify(e.detail.where.overworld.Enemy1.getCurPos()) == JSON.stringify([-1, -1]) &&
                JSON.stringify(e.detail.where.overworld.Enemy2.getCurPos()) == JSON.stringify([-1, -1]) &&
                JSON.stringify(e.detail.where.overworld.Enemy3.getCurPos()) == JSON.stringify([-1, -1])) {
                if (JSON.stringify(e.detail.pos) == JSON.stringify([8, 3])) { 
                    e.detail.where.startCutscene([
                        {type: "changeMap", map: "lev6"}
                    ]);
                    document.querySelector(".code-area").value = "";
                    document.getElementById("l6").classList.remove("disabled");
                    if (getCookie("username") != undefined) postLevel(getCookie("username"), 6);
                }
            } else if (JSON.stringify(e.detail.pos) == JSON.stringify([8, 3])) { 
                e.detail.where.startCutscene([
                    {type: "delTextMessage"},
                    {type: "textMessage", text: "Обязательно победи всех ниндзя песка"},
                ]);
            }
        }
    }
}