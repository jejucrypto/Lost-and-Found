<?php

if (!isset($_GET["token"]) || empty($_GET["token"])) {
    die("Invalid or missing token.");
}

$token = $_GET["token"];
$token_hash = hash("sha256", $token);

$mysqli = require __DIR__ . "/database.php";

$sql = "SELECT * FROM userdetails WHERE reset_token_hash = ?";
$stmt = $mysqli->prepare($sql);

if (!$stmt) {
    die("Database error: Failed to prepare statement.");
}

$stmt->bind_param("s", $token_hash);

$stmt->execute();
$result = $stmt->get_result();

$user = $result->fetch_assoc();

if (!$user) {
    die("Invalid token or user not found.");
}

if (strtotime($user["reset_token_exprire_at"]) <= time()) {
    die("Token has expired.");
}

?>

<!DOCTYPE html>

<html lang="en">
        <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Lost & Found System</title>
                <link rel="stylesheet" href="/LnF/Accounts/reset-password.css">        
</head>
        <body>
                  <header>
                        <nav class="navbar">
                              <div class="logo">
                                    <img class="logo-image" src="/LnF/Reference/ctu-danao-logo.png" alt="CTU-Logo">
                                    <div>
                                          <p class="school-ctu">Cebu Technological University</p>
                                          <p class="school-ctu">Danao Campus</p>
                                    </div>
                              </div>
                        </nav>
                  </header>
            <div class="forgot-pass-container">                             <!--Forgot Pass-->
                    <div>
                      <h1 class="forgot-pass-txt">Forgot Password</h1>
                    </div>
                    
                    <form method="post" action="process-reset-password.php">
                      
                    <input type="hidden" name="token" value="<?=htmlspecialchars($token) ?>">

                    <div  class="newpass-container">
                          <p>New password:</p>  
                          <input placeholder="New Password" type="password" name="password">
                    </div>
                    <div  class="confirmPass-container">
                      <p >Confirm password:</p>  
                      <input placeholder="Confirm Password" type="password" name="password_confirmation">
                </div>
              
                     <div class="Enter">
                            <button class="Enter-button">Confirm</button>
                     </div>
                    </form>
                </div>
        </body>
</html>