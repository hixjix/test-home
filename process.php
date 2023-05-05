<!-- process.php -->
<?php
    // 檢查表單是否提交
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // 獲取表單數據
        $name = $_POST["name"];
        $email = $_POST["email"];

        // 在這裡可以進行數據驗證和其他處理操作
        // 例如，檢查姓名和郵箱是否為必填字段，驗證郵箱格式等

        // 將數據存入資料庫或進行其他操作
        // 在這裡你可以使用資料庫連接進行插入操作

        // 顯示成功消息
        echo "表單提交成功！";
    }
?>
<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
?>