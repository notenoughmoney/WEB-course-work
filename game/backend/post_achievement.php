<?php
    $db = new mysqli(
        "127.0.0.1",
        "istu_zimablue2001",
        "ISTU2021_zimablue2001",
        "istu_zimablue2001"
    );
    
    $username = $_POST['username'];
    $id = $_POST['id'];

    //проверка на уже существующие ачивки
    $check = $db->query("SELECT COUNT(*) FROM gameUsersAchievements WHERE username = '$username' and achievementId = '$id';");
    echo json_encode($check);
    while($row = $check->fetch_assoc()) {
        //если ачивка есть, то дублировать не надо
        //если ачивки нет, то постим ачивку
        if ($row['COUNT(*)'] == "0") {
            $check = $db->query("insert into gameUsersAchievements (username, achievementId) 
                values ('$username', '$id');"
            );
        } else {
            $data['answer'] = "done";
        }
        
    }

    $data['success'] = 'yes';

    echo json_encode($data);

    $db->close();
?>