<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "lostandfounddb";

// Database connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

return $conn;

?>