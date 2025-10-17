<?php

namespace App;

class Vulnerabilities
{
    // // SQL Injection vulnerability
    // public function getUserById($id)
    // {
    //     $pdo = new \PDO('mysql:host=localhost;dbname=test', 'user', 'pass');
    //     $sql = "SELECT * FROM users WHERE id = " . $id; // Vulnerable to SQL injection
    //     return $pdo->query($sql)->fetch();
    // }

    // // XSS vulnerability
    // public function displayUserInput($userInput)
    // {
    //     echo $userInput; // Vulnerable to XSS - no escaping
    // }

    // // Path traversal vulnerability
    // public function readFile($filename)
    // {
    //     return file_get_contents('/var/www/uploads/' . $filename); // Path traversal
    // }

    // // Command injection vulnerability
    // public function pingHost($host)
    // {
    //     return shell_exec('ping -c 1 ' . $host); // Command injection
    // }

    // // Insecure deserialization
    // public function processData($serializedData)
    // {
    //     return unserialize($serializedData); // Unsafe deserialization
    // }

    // // Weak random number generation
    // public function generateToken()
    // {
    //     return md5(rand()); // Weak randomness
    // }

    // // Hard-coded credentials
    // public function connectToDatabase()
    // {
    //     $password = 'admin123'; // Hard-coded password
    //     return new \PDO('mysql:host=localhost;dbname=app', 'admin', $password);
    // }

    // // Information disclosure
    // public function handleError($message)
    // {
    //     die($message . ' in ' . __FILE__ . ' on line ' . __LINE__); // Stack trace exposure
    // }
}
