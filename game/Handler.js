class Handler {

    static hitHandler = e => {
        //e.detail.where.Enemy.die();
        console.log(e.detail.where.overworld.Enemy.die());
    }

    static sceneInitHandler = e => {
        if (e.detail.where.name == 1)
            e.detail.where.startCutscene([
                {type: "textMessage", text: "Управляй наруто с помощью методов: moveRight(), moveUp() и т.д."},
                {type: "textMessage", text: "Например, Naruto.moveDown(3) передвинет Наруто на 3 клетки вниз."},
                {type: "textMessage", text: "Для всех методов аргумент по умолчанию - 1"},
                {type: "textMessage", text: "Также доступны циклы и условия JS"}
            ]);

        if (e.detail.where.name == 2) {
            e.detail.where.startCutscene([
                {type: "delTextMessage"},
                {type: "textMessage", text: "Не утони!"}
            ]);
        }
        if (e.detail.where.name == 3) {
            e.detail.where.startCutscene([
                {type: "delTextMessage"},
                {type: "textMessage", text: "Если ты смотрел аниме, значит ты уже знаешь, что у Наруто есть друзья"},
                {type: "textMessage", text: "Розовая - Сакура (Sakura), синий - Саске (Sasuke)"},
                {type: "textMessage", text: "Они имеют аналогичное управление"},
                {type: "textMessage", text: "А теперь попробуй решить головоломку"},
                {type: "textMessage", text: "Сделай так, чтобы Наруто встал на стрелочку"},
            ]);
        }
        if (e.detail.where.name == 4) {
            e.detail.where.startCutscene([
                {type: "delTextMessage"},
                {type: "textMessage", text: "Победи ниндзя песка"},
                {type: "textMessage", text: "Подойди к нему вплотную и ударь его, используя метод hitRight();"},
            ]);
        }
    }

    static moveHandler = e => {
        if (e.detail.where.name == 1) {
            if (JSON.stringify(e.detail.pos) == JSON.stringify([7, 3])) { 
                e.detail.where.startCutscene([
                    {type: "changeMap", map: "lev2"}
                ]);
            }
        }
        if (e.detail.where.name == 2) {
            if (JSON.stringify(e.detail.pos) == JSON.stringify([9, 3])) { 
                e.detail.where.startCutscene([
                    {type: "changeMap", map: "lev3"}
                ]);
            }
        }



        if (e.detail.where.name == 3) {
            console.log(e.detail.who);
            if (JSON.stringify(e.detail.pos) == JSON.stringify([4, 3]) && e.detail.who.name == "Naruto") { 
                e.detail.where.startCutscene([
                    {type: "changeMap", map: "lev4"}
                ]);
            }
        }
    }
}