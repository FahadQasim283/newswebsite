<?php
require_once 'db.php';
$sql = "SELECT * FROM favourite_movies";
$favIds = [];
$result = $conn->query( $sql );
while ($row = $result->fetch_assoc()) {
    $favIds[] = $row['id'];
}
echo json_encode($favIds);
?>