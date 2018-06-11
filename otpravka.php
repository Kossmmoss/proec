<?php
$host = 'localhost'; // адрес сервера 
$database = 'lid'; // имя базы данных
$user = 'root'; // имя пользователя
$password = ''; // пароль
$connect = mysqli_connect($host, $user, $password, $database);
    if ($connect->connect_error) {
        die('Error : ('. $connect->connect_errno .') '. $connect->connect_error);
    }
$connect->set_charset('utf8');
if (isset($_POST['submit'])) 
{
    $name = $_POST['name'];
    $email = $_POST['email'];
    echo '<br>Вы отправили данные:' . '<br>Имя: ' . $name . '<br>Емаил: ' . $email ; 
    $connect->query("INSERT INTO info (email, name) VALUES ('$email', '$name'); ");	
}


mysqli_close($connect);

?>