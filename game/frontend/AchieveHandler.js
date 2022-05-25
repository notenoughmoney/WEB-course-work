class AchieveHandler {

    static done = [];

    static isCompleted(index) {
        // если куки не определена - берём с локалки
        if (getCookie("username") == undefined) {
            return (JSON.stringify(AchieveHandler.done).includes(JSON.stringify(index))) ? true : false;
        }
        // если куки определена - берём с переменной определённой с сервера
        else return (JSON.stringify(completedAchievements).includes(JSON.stringify(index))) ? true : false;
    }

    static hackerHandler = e => {
        if (!AchieveHandler.isCompleted(0)) {
            Swal.fire({
                title: "Хакер",
                text: "Вы заработали новое достижение!",
                imageUrl: "/game/frontend/images/achievements/hacker.jpg",
                imageHeight: 160
            });
            // записываеи локально
            if (getCookie("username") == undefined) AchieveHandler.done.push(0);
            // записываем серверно
            else postAchievement(getCookie("username"), 0);
            // локейтим на панели
            locateAchievement(0);
            // перезаписываем сервенрную переменную
            completedAchievements.push(0);
        }
    }

    static cellsWalked = 0;
    static stepHandler = e => {
        if (!AchieveHandler.isCompleted(1)) {
            Swal.fire({
                title: "Первый шаг",
                text: "Вы заработали новое достижение!",
                imageUrl: "/game/frontend/images/achievements/firstStep.jpg",
                imageHeight: 160
            });
            if (getCookie("username") == undefined) AchieveHandler.done.push(1);
            else postAchievement(getCookie("username"), 1);
            locateAchievement(1);
            completedAchievements.push(1);
        }
        if (!AchieveHandler.isCompleted(2) && AchieveHandler.cellsWalked == 50) {
            Swal.fire({
                title: "50 пройденных клеток",
                text: "Вы заработали новое достижение!",
                imageUrl: "/game/frontend/images/achievements/fiftySteps.jpg",
                imageHeight: 160
            });
            if (getCookie("username") == undefined) AchieveHandler.done.push(2);
            else postAchievement(getCookie("username"), 2);
            locateAchievement(2);
            completedAchievements.push(2);
        }
        AchieveHandler.cellsWalked++;
    }


    static enemyDieHandler = e => {
        if (!AchieveHandler.isCompleted(3)) {
            Swal.fire({
                title: "First blood",
                text: "Вы заработали новое достижение!",
                imageUrl: "/game/frontend/images/achievements/firstBlood.jpg",
                imageHeight: 160
            });
            if (getCookie("username") == undefined) AchieveHandler.done.push(3);
            else postAchievement(getCookie("username"), 3);
            locateAchievement(3);
            completedAchievements.push(3);
        }
    }


    static personDieHandler = e => {
        if (!AchieveHandler.isCompleted(4)) {
            Swal.fire({
                title: "Умер",
                text: "Вы заработали новое достижение!",
                imageUrl: "/game/frontend/images/achievements/died.jpg",
                imageHeight: 160
            });
            if (getCookie("username") == undefined) AchieveHandler.done.push(4);
            else postAchievement(getCookie("username"), 4);
            locateAchievement(4);
            completedAchievements.push(4);
        }
    }


    static thirdLevHandler = e => {
        if (!AchieveHandler.isCompleted(5)) {
            Swal.fire({
                title: "Головоломка",
                text: "Вы заработали новое достижение!",
                imageUrl: "/game/frontend/images/achievements/brainBreak.jpg",
                imageHeight: 160
            });
            if (getCookie("username") == undefined) AchieveHandler.done.push(5);
            else postAchievement(getCookie("username"), 5);
            locateAchievement(5);
            completedAchievements.push(5);
        }
    }


    static trickHandler = e => {
        if (!AchieveHandler.isCompleted(6)) {
            Swal.fire({
                title: "Умный в гору не пойдёт",
                text: "Вы заработали новое достижение!",
                imageUrl: "/game/frontend/images/achievements/trick.jpg",
                imageHeight: 160
            });
            if (getCookie("username") == undefined) AchieveHandler.done.push(6);
            else postAchievement(getCookie("username"), 6);
            locateAchievement(6);
            completedAchievements.push(6);
        }
    }
    

    static berserkHandler = e => {
        if (!AchieveHandler.isCompleted(7)) {
            Swal.fire({
                title: "Берсерк",
                text: "Вы заработали новое достижение!",
                imageUrl: "/game/frontend/images/achievements/berserk.jpg",
                imageHeight: 160
            });
            if (getCookie("username") == undefined) AchieveHandler.done.push(7);
            else postAchievement(getCookie("username"), 7);
            locateAchievement(7);
            completedAchievements.push(7);
        }
    }


    static teamHandler = e => {
        if (!AchieveHandler.isCompleted(8)) {
            Swal.fire({
                title: "Команда",
                text: "Вы заработали новое достижение!",
                imageUrl: "/game/frontend/images/achievements/team.jpg",
                imageHeight: 160
            });
            if (getCookie("username") == undefined) AchieveHandler.done.push(8);
            else postAchievement(getCookie("username"), 8);
            locateAchievement(8);
            completedAchievements.push(8);
        }
    }


    static sexyHandler = e => {
        if (!AchieveHandler.isCompleted(9)) {
            Swal.fire({
                title: "Харош",
                text: "Вы заработали новое достижение!",
                imageUrl: "/game/frontend/images/achievements/sexy.jpg",
                imageHeight: 160
            });
            if (getCookie("username") == undefined) AchieveHandler.done.push(9);
            else postAchievement(getCookie("username"), 9);
            locateAchievement(9);
            completedAchievements.push(9);
        }
    }


    static ratHandler = e => {
        if (!AchieveHandler.isCompleted(10)) {
            Swal.fire({
                title: "Крыса",
                text: "Вы заработали новое достижение!",
                imageUrl: "/game/frontend/images/achievements/rat.jpg",
                imageHeight: 160
            });
            if (getCookie("username") == undefined) AchieveHandler.done.push(10);
            else postAchievement(getCookie("username"), 10);
            locateAchievement(10);
            completedAchievements.push(10);
        }
    }

}
