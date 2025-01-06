<?php
// Check if the token is set and not empty
if (!isset($_POST["token"]) || empty($_POST["token"])) {
    die("Invalid or missing token.");
}

$token = $_POST["token"];
$token_hash = hash("sha256", $token);

$mysqli = require __DIR__ . "/database.php";

// Fetch user details based on token hash
$sql = "SELECT * FROM userdetails WHERE reset_token_hash = ?";
$stmt = $mysqli->prepare($sql);
if (!$stmt) {
    die("Database error: Failed to prepare the statement.");
}

$stmt->bind_param("s", $token_hash);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if (!$user) {
    die("Invalid token or user not found.");
}

// Check if the token has expired
if (strtotime($user["reset_token_exprire_at"]) <= time()) {
    die("Token has expired.");
}

// Hash the new password securely
$hashed_password = password_hash($_POST["password"], PASSWORD_BCRYPT);

// Update user details, nullify the reset token and expiration time
$sql = "UPDATE userdetails 
        SET hashed_password = ?, reset_token_hash = NULL, reset_token_exprire_at = NULL 
        WHERE id = ?";
$stmt = $mysqli->prepare($sql);
if (!$stmt) {
    die("Database error: Failed to prepare the update statement.");
}

$stmt->bind_param("ss", $hashed_password, $user["id"]);
if ($stmt->execute()) {
    echo "Click <a href='/Lost-and-Found/Main-page/login.html'>Here</a> to login. ";
    // Optionally add a redirect header:
    // header("Location: /login.php");
    exit;
} else {
    die("Failed to update the password.");
}
?>
