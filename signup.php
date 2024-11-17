<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "example";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$username = $_POST['username'];
$password = $_POST['password'];
echo $username;
echo $password;

// Check if username already exists
$sql = "SELECT * FROM info WHERE username = '$username'";
$result = $conn->query($sql);

echo $result->num_rows;
if ($result->num_rows > 0) {
    // Username already exists, display error message
    echo "Username already exists.";
} else {
    // Insert user data into the database
    $sql = "INSERT INTO info (username, password) VALUES ('$username', '$password')";

    if ($conn->query($sql) === TRUE) {
        // User created successfully, redirect to homepage with a session variable
        session_start();
        $_SESSION['username'] = $username;
        header("Location: homepage.php");
        exit();
    } else {
        // Error inserting data
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
