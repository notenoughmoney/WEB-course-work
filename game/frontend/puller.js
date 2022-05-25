function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

function getLevels(username) {
    var out;
    $.ajax ({
        url: "../backend/get_levels.php",
        async: false,
        method: "POST",
        data: {
            username: username,
        },
        success: function(data) {
            var parsed = JSON.parse(data);
            out = parsed.level;
        },
    });
    return out;
}

function getAchievements(username) {
    var out;
    $.ajax ({
        url: "../backend/get_achievements.php",
        async: false,
        method: "POST",
        data: {
            username: username,
        },
        success: function(data) {
            var parsed = JSON.parse(data);
            out = parsed;
        },
    });
    return out;
}

var completedLevels = 1;
var completedAchievements = [];



// подаём индекс ачивки
function locateAchievement(index) {
    const accordances = {
        0:  {name: "Хакер",        path: "hacker.jpg"    },
        1:  {name: "Первый шаг",   path: "firstStep.jpg" },
        2:  {name: "50 шагов",     path: "fiftySteps.jpg"},
        3:  {name: "Первая кровь", path: "firstBlood.jpg"},
        4:  {name: "Умер",         path: "died.jpg"      },
        5:  {name: "Головоломка",  path: "brainBreak.jpg"},
        6:  {name: "Хитрый",       path: "trick.jpg"     },
        7:  {name: "Берсерк",      path: "berserk.jpg"   },
        8:  {name: "Команда",      path: "team.jpg"      },
        9:  {name: "Секси джутсу", path: "sexy.jpg"      },
        10: {name: "Крыса",        path: "rat.jpg"       },
    }

    let toInsert = `
            <div class="ach-item">
                <img class="ach-item-image" src="/game/frontend/images/achievements/${accordances[index].path}" width="80" height="50">
                <h5>${accordances[index].name}</h5>       
            </div>
    `;
    document.querySelector(".achievement-list").innerHTML += toInsert;
}

//берём уровни и ачивки
if (getCookie("username") != undefined) {
    
    let username = getCookie("username");

    //кол-во доступных уровней
    completedLevels = getLevels(username);
    //индексы ачивок
    completedAchievements = getAchievements(username);
    if (completedAchievements != "noAchievements") {
        completedAchievements = Object.keys(completedAchievements);
        //размещаем ачивки
        for (let i = 0; i < completedAchievements.length; i++) {
            locateAchievement(completedAchievements[i])
        }
    } else {
        completedAchievements = [];
    }

    console.log(`Levels: ${completedLevels}`);
    console.log(`Achievements: ${completedAchievements}`);

    //закрашиваем пройденные уровни
    for (let i = 1; i <= completedLevels; i++) {
        document.getElementById(`l${i}`).classList.remove("disabled");
    }
}

function locateLogin() {
    // принтим логин игрока
    var loginToLocate = (getCookie("username") == undefined) ? "Anonimous" : getCookie("username");
    document.querySelector(".header-login").innerHTML = `<h5>${loginToLocate}</h5>`;
}

locateLogin();


