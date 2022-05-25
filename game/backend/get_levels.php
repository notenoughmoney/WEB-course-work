<?php
    $db = new mysqli(
        "127.0.0.1",
        "istu_zimablue2001",
        "ISTU2021_zimablue2001",
        "istu_zimablue2001"
    );
    
    $username = $_POST['username'];

    $check = $db->query("SELECT level FROM gameUsers WHERE username = '$username';");
    while($row = $check->fetch_assoc()) {
        $data['level'] = $row['level'];
    }

    echo json_encode($data);

    $db->close();
?>