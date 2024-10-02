<?php
session_start();
// Database connection details (same as signup.php)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "example";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


// Retrieve form data
$username = $_POST['username'];
$password = $_POST['password'];

// Check if username and password match
$sql = "SELECT * FROM info WHERE username = '$username' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // User logged in successfully, set session variable and redirect to homepage
    session_start();
    $_SESSION['username'] = $username;
    header("Location: homepage.php");
    exit();
} else {
    // Incorrect username or password
    echo "Invalid username or password.";
}

$conn->close();
?>