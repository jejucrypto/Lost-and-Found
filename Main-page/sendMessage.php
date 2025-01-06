<?php
include 'db.php'; // Include database connection

$sender_id = $_POST['sender_id'];
$receiver_id = $_POST['receiver_id'];
$message = $_POST['message'];

$sql = "INSERT INTO messages (sender_id, receiver_id, message) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param('iis', $sender_id, $receiver_id, $message);
$stmt->execute();

echo json_encode(['success' => $stmt->affected_rows > 0]);
?>
