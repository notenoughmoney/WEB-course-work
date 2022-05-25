<?php
    $db = new mysqli(
        "127.0.0.1",
        "istu_zimablue2001",
        "ISTU2021_zimablue2001",
        "istu_zimablue2001"
    );
    
    $username = $_POST['username'];

    // проверка наличия ачивок
    $check = $db->query("SELECT COUNT(*) FROM `gameUsersAchievements` INNER JOIN `gameAchievements` ON gameUsersAchievements.achievementId = gameAchievements.id where username = '$username' order by gameAchievements.id;");
    while($row = $check->fetch_assoc()) {
        if ($row['COUNT(*)'] == "0") {
            $data = "noAchievements";
        } else {
            $query = $db->query("SELECT * FROM `gameUsersAchievements` INNER JOIN `gameAchievements` ON gameUsersAchievements.achievementId = gameAchievements.id where username = '$username' order by gameAchievements.id;");
            while($row = $query->fetch_assoc()) {
                $data[$row['achievementId']] = $row['name'];
            }
        }
    }

    echo json_encode($data);


    $db->close();
?>