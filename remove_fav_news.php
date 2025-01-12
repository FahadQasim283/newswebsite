<?php
require_once 'db.php';
if (isset($_GET['id'])) {
    $id = $conn->real_escape_string($_GET['id']);
    $sql = "DELETE FROM favourite_movies WHERE id = '$id'";
    if ($conn->query($sql) === TRUE) {
        header("Location: index.php");
        exit();
    } else {
        echo "Error deleting record: " . $conn->error;
    }
}
$conn->close();
header("Location: index.php");
exit();
?>