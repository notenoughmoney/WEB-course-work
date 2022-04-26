class AchieveHandler {

    static hackerDone = false;
    static hackerHandler = e => {
        if (!AchieveHandler.hackerDone) {
            Swal.fire({
                title: "Хакер",
                text: "Вы заработали новое достижение!",
                imageUrl: "/images/hacker.jpg",
                imageHeight: 160
            });
            AchieveHandler.hackerDone = true;
        }
    }

    static cellsWalked = 0;
    static fisrtStepDone = false;
    static fiftyStepsDone = false;
    static stepHandler = e => {
        if (!AchieveHandler.fisrtStepDone) {
            Swal.fire({
                title: "Первый шаг",
                text: "Вы заработали новое достижение!",
                imageUrl: "/images/firstStep.jpg",
                imageHeight: 160
            });
            AchieveHandler.fisrtStepDone = true;
        }
        if (!AchieveHandler.fiftyStepsDone && AchieveHandler.cellsWalked == 50) {
            Swal.fire({
                title: "50 пройденных клеток",
                text: "Вы заработали новое достижение!",
                imageUrl: "/images/fiftySteps.jpg",
                imageHeight: 160
            });
            AchieveHandler.fiftyStepsDone = true;
        }
        AchieveHandler.cellsWalked++;
    }

    static enemyDiedDone = false;
    static enemyDieHandler = e => {
        if (!AchieveHandler.enemyDiedDone) {
            Swal.fire({
                title: "First blood",
                text: "Вы заработали новое достижение!",
                imageUrl: "/images/firstBlood.jpg",
                imageHeight: 160
            });
            AchieveHandler.enemyDiedDone = true;
        }
    }

    static personDiedDone = false;
    static personDieHandler = e => {
        if (!AchieveHandler.personDiedDone) {
            Swal.fire({
                title: "Умер",
                text: "Вы заработали новое достижение!",
                imageUrl: "/images/died.jpg",
                imageHeight: 160
            });
            AchieveHandler.personDiedDone = true;
        }
    }

    static thirdLevDone = false;
    static thirdLevHandler = e => {
        if (!AchieveHandler.thirdLevDone) {
            Swal.fire({
                title: "Головоломка",
                text: "Вы заработали новое достижение!",
                imageUrl: "/images/brainBreak.jpg",
                imageHeight: 160
            });
            AchieveHandler.thirdLevDone = true;
        }
    }

    static trickDone = false;
    static trickHandler = e => {
        if (!AchieveHandler.trickDone) {
            Swal.fire({
                title: "Умный в гору не пойдёт",
                text: "Вы заработали новое достижение!",
                imageUrl: "/images/trick.jpg",
                imageHeight: 160
            });
            AchieveHandler.trickDone = true;
        }
    }
    
    static berserkDone = false;
    static berserkHandler = e => {
        if (!AchieveHandler.berserkDone) {
            Swal.fire({
                title: "Берсерк",
                text: "Вы заработали новое достижение!",
                imageUrl: "/images/berserk.jpg",
                imageHeight: 160
            });
            AchieveHandler.berserkDone = true;
        }
    }

    static teamDone = false;
    static teamHandler = e => {
        if (!AchieveHandler.teamDone) {
            Swal.fire({
                title: "Команда",
                text: "Вы заработали новое достижение!",
                imageUrl: "/images/team.jpg",
                imageHeight: 160
            });
            AchieveHandler.teamDone = true;
        }
    }

}