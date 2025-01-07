<?php

require "C:/xampp/htdocs/Lost-and-Found/Registration/vendor/autoload.php";

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "lostandfounddb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

$client = new Google\Client;

$client->setClientId("1010807943748-aevbn48266nm2p9gr909g7966pieojcm.apps.googleusercontent.com");
$client->setClientSecret("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");
$client->setRedirectUri("http://localhost/Lost-and-Found/Registration/redirect.php");

$client->addScope("email");
$client->addScope("profile");

// Check if there is an authentication code in the query string
if (!isset($_GET["code"])) {
    // If no code, redirect the user to the Google login page
    header("Location: " . $client->createAuthUrl());
    exit;
}

// If code is present, handle the authentication and process user data
$token = $client->fetchAccessTokenWithAuthCode($_GET["code"]);
if (isset($token['error'])) {
    exit("Failed to authenticate: " . $token['error']);
}

$client->setAccessToken($token["access_token"]);

$oauth = new Google\Service\Oauth2($client);
$userinfo = $oauth->userinfo->get();

// Extract user information
$email = $userinfo->email;
$firstName = $userinfo->givenName;
$lastName = $userinfo->familyName;
$fullName = $userinfo->name;

// Check if user already exists in the database
$sql_check = "SELECT id FROM userdetails WHERE email = ?";
$stmt_check = $conn->prepare($sql_check);
$stmt_check->bind_param("s", $email);
$stmt_check->execute();
$stmt_check->store_result();

if ($stmt_check->num_rows > 0) {
    // User already exists
    $stmt_check->close();
    echo "<h1>You are already registered!</h1>";
    echo "<p>Redirecting to the main page in <span id='countdown'>5</span> seconds...</p>";
    echo "<script>
        let countdown = 5;
        const timer = setInterval(() => {
            countdown--;
            document.getElementById('countdown').innerText = countdown;
            if (countdown <= 0) {
                clearInterval(timer);
                window.location.href = '/Lost-and-Found/Main-page/main-page.html';
            }
        }, 1000);
    </script>";
    exit;
}

$stmt_check->close();

// Insert new user into the database
$sql_insert = "INSERT INTO userdetails (name, email) VALUES (?, ?)";
$stmt_insert = $conn->prepare($sql_insert);
$stmt_insert->bind_param("ss", $fullName, $email);

if ($stmt_insert->execute()) {
    // Successful registration
    echo "<h1>Registration Successful!</h1>";
    echo "<p>You will be redirected to the main page in <span id='countdown'>5</span> seconds...</p>";
    echo "<script>
        let countdown = 5;
        const timer = setInterval(() => {
            countdown--;
            document.getElementById('countdown').innerText = countdown;
            if (countdown <= 0) {
                clearInterval(timer);
                window.location.href = '/Lost-and-Found/Main-page/main-page.html';
            }
        }, 1000);
    </script>";
} else {
    echo "Error: " . $stmt_insert->error;
}

$stmt_insert->close();
$conn->close();
?>
