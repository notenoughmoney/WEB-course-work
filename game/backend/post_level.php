<?php
    $db = new mysqli(
        "127.0.0.1",
        "istu_zimablue2001",
        "ISTU2021_zimablue2001",
        "istu_zimablue2001"
    );
    
    $username = $_POST['username'];
    $level = $_POST['level'];

    // делаем запрос только если уровень на входе больше существующего
    $query = $db->query("UPDATE gameUsers SET level = $level where username = '$username' and level < $level");

    $data['success'] = 'yes';

    echo json_encode($data);

    $db->close();
?>