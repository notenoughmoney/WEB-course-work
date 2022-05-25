function register(username, password) {
    $.ajax ({
        url: "../backend/register.php",
        method: "POST",
        data: {
            username: username,
            password: password
        },
        success: function(data) {
            let parsed = JSON.parse(data);
            if (parsed.success == "yes") {
                //если успешно зарегались, то можно поставить куки
                document.cookie = `username=${username}; path=http://zimablue2001.istu.webappz.ru/game/frontend/index.html; max-age=31536000`;
                window.location.replace("http://zimablue2001.istu.webappz.ru/game/frontend/index.html");    
            }
            if (parsed.userExist == "yes") {
                Swal.fire(
                    'Упс...',
                    'Похоже, пользователь с этим ником уже зарегистрирован.',
                    'error'
                );
            }
        },
        error: function(error) {
            Swal.fire(
                'Серьёзная проблема',
                error,
                'error'
            );
        }
    });
}

function preRegister() {
    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;
    register(username, password);
}

function enter(username, password) {
    $.ajax ({
        url: "../backend/enter.php",
        method: "POST",
        data: {
            username: username,
            password: password
        },
        success: function(data) {
            let parsed = JSON.parse(data);
            console.log(parsed);
            if (parsed.userExist == "yes") {
                //если вошли, то ставим куки (ещё раз, даже если они существуют)
                document.cookie = `username=${username}; path=http://zimablue2001.istu.webappz.ru/game/frontend/index.html; max-age=31536000`;
                window.location.replace("http://zimablue2001.istu.webappz.ru/game/frontend/index.html");
            } else if (parsed.loginExist == "yes" && parsed.passwordExist == "no") {
                Swal.fire(
                    'Упс...',
                    'Похоже, вы ошиблись с паролем.',
                    'error'
                );
            } else if (parsed.loginExist == "no" && parsed.passwordExist == "yes") {
                Swal.fire(
                    'Упс...',
                    'Похоже, вы ошиблись с логином.',
                    'error'
                );
            } else {
                Swal.fire(
                    'Упс...',
                    'Такого пользователя нет.',
                    'error'
                );
            }
        },
        error: function(error) {
            Swal.fire(
                'Серьёзная проблема',
                error,
                'error'
            );
        }
    });
}

function preEnter() {
    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;
    enter(username, password);
}

function postAchievement(username, achievementId) {
    $.ajax ({
        url: "../backend/post_achievement.php",
        method: "POST",
        data: {
            username: username,
            id: achievementId
        },
        success: function(data) {
            console.log(data);
        },
        error: function(error) {
            Swal.fire(
                'Серьёзная проблема',
                error,
                'error'
            );
        }
    });
}

function postLevel(username, level) {
    $.ajax ({
        url: "../backend/post_level.php",
        method: "POST",
        data: {
            username: username,
            level: level
        },
        success: function(data) {
            console.log(data);
        },
        error: function(error) {
            Swal.fire(
                'Серьёзная проблема',
                error,
                'error'
            );
        }
    });
}