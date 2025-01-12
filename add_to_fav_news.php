<?php
require_once 'db.php';
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $id = $conn->real_escape_string($_GET['id']);
    $checkSql = "SELECT * FROM `favourite_movies` WHERE `id` = '$id'";
    $result = $conn->query($checkSql);

    if ($result->num_rows > 0) {
        echo json_encode(["success" => false, "message" => "Movie already added to favorites"]);
        header('Location: index.php');
    } else {
        $insertSql = "INSERT INTO `favourite_movies` (`id`) VALUES ('$id')";
        if ($conn->query($insertSql) === TRUE) {
            echo json_encode(["success" => true, "message" => "Movie added to favorites"]);
            header('Location: index.php');
        } else {
            echo json_encode(["success" => false, "error" => $conn->error]);
        }
    }
}
?>