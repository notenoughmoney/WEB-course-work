<?php
    $db = new mysqli(
        "127.0.0.1",
        "istu_zimablue2001",
        "ISTU2021_zimablue2001",
        "istu_zimablue2001"
    );
    
    $username = $_POST['username'];
    $password = $_POST['password'];

    //проверка на логин
    $checkLogin = $db->query("SELECT COUNT(*) FROM gameUsers WHERE username = '$username';");
    while($row = $checkLogin->fetch_assoc()) {
        $data['loginExist'] = ($row['COUNT(*)'] != "0") ? 'yes': 'no';
    }

    //проверка на пароль
    $checkPas = $db->query("SELECT COUNT(*) FROM gameUsers WHERE password = '$password';");
    while($row = $checkPas->fetch_assoc()) {
        $data['passwordExist'] = ($row['COUNT(*)'] != "0") ? 'yes': 'no';
    }

    //проверка на существование польхователя
    $checkUser = $db->query("SELECT COUNT(*) FROM gameUsers WHERE password = '$password' and username = '$username';");
    while($row = $checkUser->fetch_assoc()) {
        $data['userExist'] = ($row['COUNT(*)'] != "0") ? 'yes': 'no';
    }
    
    echo json_encode($data);

    $db->close();
?>