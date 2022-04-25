class Handler {

    static sexyJutsuHandler = async(e) => {
        if (e.detail.where.name == 6) {
            if (e.detail.what == "sexyJutsu") {
                await e.detail.where.overworld.Itachi.moveRight(5);
                e.detail.where.startCutscene([
                    {type: "delTextMessage"},
                    {type: "textMessage", text: "Ты победил Итачи и прошёл игру!"}
                ]);
            }
        }
    }

    static hitHandler = e => {
        if (e.detail.where.name == 4) {
            if (JSON.stringify(e.detail.pos) == JSON.stringify([4, 2]) && e.detail.what == "hitRight") {
                e.detail.where.overworld.Enemy1.die();
            }
            if (JSON.stringify(e.detail.pos) == JSON.stringify([6, 2]) && e.detail.what == "hitLeft") {
                e.detail.where.overworld.Enemy1.die();
            }
        }
        if (e.detail.where.name == 5) {
            if (JSON.stringify(e.detail.pos) == JSON.stringify([4, 2]) && e.detail.what == "hitRight") {
                e.detail.where.overworld.Enemy1.die();
            }
            if (JSON.stringify(e.detail.pos) == JSON.stringify([4, 3]) && e.detail.what == "hitRight") {
                e.detail.where.overworld.Enemy2.die();
            }
            if (JSON.stringify(e.detail.pos) == JSON.stringify([4, 4]) && e.detail.what == "hitRight") {
                e.detail.where.overworld.Enemy3.die();
            }
            if (JSON.stringify(e.detail.pos) == JSON.stringify([6, 2]) && e.detail.what == "hitLeft") {
                e.detail.where.overworld.Enemy1.die();
            }
            if (JSON.stringify(e.detail.pos) == JSON.stringify([6, 3]) && e.detail.what == "hitLeft") {
                e.detail.where.overworld.Enemy2.die();
            }
            if (JSON.stringify(e.detail.pos) == JSON.stringify([6, 4]) && e.detail.what == "hitLeft") {
                e.detail.where.overworld.Enemy3.die();
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
        if (e.detail.where.name == 5) {
            e.detail.where.startCutscene([
                {type: "delTextMessage"},
                {type: "textMessage", text: "Победи нескольких ниндзя песка"},
                {type: "textMessage", text: "Не забывай, что у тебя есть друзья!"},
            ]);
        }
        if (e.detail.where.name == 6) {
            e.detail.where.startCutscene([
                {type: "delTextMessage"},
                {type: "textMessage", text: "Победи Итачи"},
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
            if (JSON.stringify(e.detail.pos) == JSON.stringify([4, 3]) && e.detail.who.name == "Naruto") { 
                e.detail.where.startCutscene([
                    {type: "changeMap", map: "lev4"}
                ]);
            }
        }
        if (e.detail.where.name == 4) {
            if (JSON.stringify(e.detail.pos) == JSON.stringify([8, 2])) { 
                e.detail.where.startCutscene([
                    {type: "changeMap", map: "lev5"}
                ]);
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
                }
            }
        }
    }
}