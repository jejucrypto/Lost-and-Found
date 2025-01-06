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

// Sign-Up Logic
if (isset($_POST['signUp'])) {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    $confirm_password = $_POST['confirm_password'] ?? '';

    // Input validation
    if (empty($name) || empty($email) || empty($password)) {
        die("All fields are required.");
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }
    //if($password !== $confirm_password) {
    //    die("Passwords do not match!");
    //}
    if(strlen($password) < 8 || !preg_match('/\d/', $password)) {
        die("Password must be at least 8 characters long and have at least 1 number!");
    }


    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // Check if email already exists
    $sql_check = "SELECT id FROM userdetails WHERE email = ?";
    $stmt_check = $conn->prepare($sql_check);
    $stmt_check->bind_param("s", $email);
    $stmt_check->execute();
    $stmt_check->store_result();

    if ($stmt_check->num_rows > 0) {
        die("This email is already registered.");
    }
    $stmt_check->close();

    // Insert new user
    $sql = "INSERT INTO userdetails (name, email, hashed_password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $name, $email, $hashed_password);

    if ($stmt->execute()) {
        echo "Sign-up successful! <a href='/Lost-and-Found/Main-page/main-page.html'>Click to continue...</a>";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

// Sign-In Logic
if (isset($_POST['signIn'])) {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if (empty($email) || empty($password)) {
        die("Both email and password are required.");
    }

    $sql = "SELECT * FROM userdetails WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        if (password_verify($password, $row['hashed_password'])) {
            session_start();
            $_SESSION['email'] = $row['email'];
            echo "Login successful! <a href='/Lost-and-Found/Main-page/main-page.html'>Click here to continue...</a>";
        } else {
            echo "Incorrect password. <a href='login.html'>Please try again!</a>";
        }
    } else {
        echo "No account found with this email. <a href='login.php'>Please try again!</a>";
    }

    $stmt->close();
}

// Forgot Password Logic
if (isset($_POST["forgotPassword"])) {
  $email = $_POST["email"];
  $token = bin2hex(random_bytes(16));
  $token_hash = hash("sha256", $token);
  
  $expiry = date("Y-m-d H:i:s", time() + 60*30);
  
  $mysqli = $conn;
  
  $sql = "UPDATE userdetails SET reset_token_hash = ?, reset_token_exprire_at = ? WHERE email = ?";
  
  $stmt = $mysqli ->  prepare($sql);
  $stmt -> bind_param("sss", $token_hash, $expiry, $email);
  $stmt -> execute();

  if($mysqli -> affected_rows){

    $mail = require __DIR__."/mailer.php";
    $mail -> setFrom("noreply@gmail.com");
    $mail -> addAddress($email);
    $mail -> Subject = "Password Reset";

    $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
    $host = $_SERVER['HTTP_HOST']; // This will return "localhost" or "127.0.0.1".
    $basePath = "/Lost-and-Found/Registration"; // Replace with your project folder's relative path.
    $resetLink = "$protocol://$host$basePath/reset-password.php?token=$token";

    $mail->Body = <<<END
        Click <a href="$resetLink">here</a> to reset your password.
    END;

    try {
     $mail -> send();
    } catch (Exception $e) {
      echo "Message coould not be sent. Mailer error: {$mail->ErrorInfo}";
    }
   
  }

  echo "Email sent. Click <a href='login.html'>here </a> to log-in."; //Redirect page
}

$conn->close();
?>
