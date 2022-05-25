<?php
    $db = new mysqli(
        "127.0.0.1",
        "istu_zimablue2001",
        "ISTU2021_zimablue2001",
        "istu_zimablue2001"
    );
    
    $username = $_POST['username'];
    $password = $_POST['password'];

    //проверка на уже существующий логин
    $check = $db->query("SELECT COUNT(*) FROM gameUsers WHERE username = '$username';");
    while($row = $check->fetch_assoc()) {
        if ($row['COUNT(*)'] != "0") $data["userExist"] = 'yes';
        else {
            $data["userExist"] = 'no';
            $query = $db->query("insert into gameUsers (username, password, level) 
                values('$username', '$password', 1)"
            );
            //проверим успешность регистрации
            $check = $db->query("SELECT COUNT(*) FROM gameUsers WHERE username = '$username' and password = '$password';");
            while($row = $check->fetch_assoc()) {
                $data['success'] = ($row['COUNT(*)'] != "0") ? 'yes': 'no';
            }
        }
    }

    
    
    echo json_encode($data);

    $db->close();
?>