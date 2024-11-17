<?php
include "session.php";
//function isLoggedIn(){
   // return isset($_SESSION['username']);
//}
//session_start();
// Check if the user is logged in
//if (isLoggedIn()) {
    // Display the username if logged in
   // echo "<h2>HI, " . $_SESSION['username'] . "</h2>";
   // var_dump ($_SESSION);
//}// else {
    // Display a message indicating the user is not logged in
   // echo "<h2>You are not logged in.</h2>";
//}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <title>PeakPerformnace.com</title>
    <link rel="stylesheet" href="homepage.css">
    <link rel="website icon" href="logo3.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <header>
        <div id="navbar">
            <div class="hoverr">
            <a id="menu1" class="aa"><i class="fa-solid fa-bars" style="margin-left: 15px;margin-right: 15px;" ></i></a>
            </div>
            <div id="name">
                <?php
                session_start();
                echo "<h2>HI, " . $_SESSION['username'] . "</h2>";

                ?>
            </div>
            <div class="logobar">
                <div class="logobar1"><img src=logo3.png class="imgg"></div>
                <div><p class="para" style="margin-left: 5px;">𝙋𝙚𝙖𝙠𝙋𝙚𝙧𝙛𝙤𝙧𝙢𝙖𝙣𝙘𝙚</p></div>
            </div>
            <div class="search">
                <div>
                    <input class="in" type="text" placeholder="Search" id="myInput" onkeyup="func()">
                    <ul id="myUL" class="unseen">
                        <li><a href="/PeakPerformance/workout/chest/chest.html">Chest</a></li>
                        <li><a href="/PeakPerformance/back.html">Back</a></li>
                        <li><a href="/PeakPerformance/workout/Arms and Legs/Legs.html">Legs</a></li>
                        <li><a href="/PeakPerformance/workout/shoulder/shoulder.html">Shoulders</a></li>
                        <li><a href="/PeakPerformance/workout/Arms and Legs/Arms.html">Arms</a></li>
                        <li><a href="/PeakPerformance/cart/CART.html">Protein</a></li>
                        <li><a href="/PeakPerformance/cart/CART.html">Creatine</a></li>
                      </ul>      
                </div>
                <div>
                    <button class="searchicon" id="sb"><i class="fa-solid fa-magnifying-glass" id="icon"></i></i></button>
                </div>
            </div>
            <div class="hoverr">
            <a href="/PeakPerformance/cart/CART.html" class="aa"><i class="fa-solid fa-cart-shopping" style="margin-right: 15px;margin-left: 15px;"></i></a>
            </div> 
            <div id="logout">
                <form action="one.html">
                <button onclick="logout()" id="exit">Log out</button>
            </div>   
        </div>
    </header>
            <div> 
                <div class="menu">
                    <div id="menuop">
                        <a href="/PeakPerformance/homepage.php" id="aaa"><div class="menuops"><h3>𝙃𝙊𝙈𝙀</h3></div></a>
                        <a href="/PeakPerformance/gymw.html" id="aaa"><div class="menuops"><h3>𝙂𝙔𝙈 𝙒𝙊𝙍𝙆𝙊𝙐𝙏𝙎</h3></div></a>
                        <a href="/PeakPerformance/Home workout/index.html" id="aaa"><div class="menuops"><h3>𝙃𝙊𝙈𝙀 𝙒𝙊𝙍𝙆𝙊𝙐𝙏𝙎</h3></div></a>
                        <a href="/PeakPerformance/diet/diet.html" id="aaa"><div class="menuops"><h3>𝘿𝙄𝙀𝙏 𝙏𝙄𝙋𝙎</h3></div></a>
                        <a href="/PeakPerformance/cart/CART.html" id="aaa"><div class="menuops"><h3>𝙎𝙐𝙋𝙋𝙇𝙀𝙈𝙀𝙉𝙏𝙎</h3></div></a>
                        <a href="/PeakPerformance/BMI/BMI.html" id="aaa"><div class="menuops"><h3>𝘽𝙈𝙄 𝘾𝘼𝙇𝘾𝙐𝙇𝘼𝙏𝙊𝙍</h3></div></a>
                        <a href="/PeakPerformance/quizins.html" id="aaa"><div class="menuops"><h3>𝙏𝙍𝙔 𝙊𝙐𝙏 𝙌𝙐𝙄𝙕</h3></div></a>
                    </div>
                </div>
                <div class="container" style="position: absolute; top: 60px;">
                    <div class="slideshow-container">

                        <div class="mySlides fade">
                        <div class="numbertext">1 / 6</div>
                        <img src="slider1.jpg" style="width:1263px; height: 528px;">
                        
                        </div>
                        
                        <div class="mySlides fade">
                        <div class="numbertext">2 / 6</div>
                        <img src="slider2.jpg" style="width:1263px; height: 528px;">
                        
                        </div>
                        
                        <div class="mySlides fade">
                        <div class="numbertext">3 / 6</div>
                        <img src="Black and Yellow Home Fitness Collection YouTube Thumbnail (1).png" style="width:1263px; height: 528px;">
                        
                        </div>
                        
                        <div class="mySlides fade">
                            <div class="numbertext">4 / 6</div>
                            <img src="Health & Fitness Product Ad Template_1723224852915.jpg" style="width:1263px; height: 528px;">
                        
                        </div>
                
                        <div class="mySlides fade">
                            <div class="numbertext">5 / 6</div>
                            <img src="20240809_192704.png" style="width:1263px; height: 528px;">
                        </div>
                        
                        <div class="mySlides fade">
                            <div class="numbertext">6 / 6</div>
                            <img src="Test your Knowledge.jpg" style="width:1263px; height: 528px;">
                        </div> 
                    </div>
                        <br>
                        
                        <div style="text-align:center">
                        <span class="dot"></span> 
                        <span class="dot"></span> 
                        <span class="dot"></span> 
                        <span class="dot"></span> 
                        <span class="dot"></span> 
                        <span class="dot"></span>
                        </div>
                </div>
  
                <div style="height: 600px;width: auto; margin-top: 588px;">
                    <div id="about"><h2 style="color: yellow;">𝘼𝘽𝙊𝙐𝙏 𝙐𝙎</h2></div>
                    <div id="about1">
                        <div id="about2"><img src="logo3.png" height="250px" width="250px" class="aA"></div>
                        <div id="about3">
                            <h5>
                            We are a holistic fitness website that provides effective workouts,  nutritional tips, and a user friendly interface to help users achieve their health and fitness objectives efficiently and sustainably.We provide:
                            </h5>
                            <ol type="1">
                                <li style="color: white; margin-left: 0px;"><h4>WORKOUT TECHNIQUES</h4></li>
                                <li style="color: white; margin-left: 0px;"><h4>HOME WORKOUT</h4></li>
                                <li style="color: white; margin-left: 0px;"><h4>DIET TIPS</h4></li>
                                <li style="color: white; margin-left: 0px;"><h4>SUPPLEMENTS</h4></li>
                                <li style="color: white; margin-left: 0px;"><h4>BMI CALCULATOR</h4></li>
                                
                            </ol>
                        </div>
                    </div>
                    <div id="about4"><h2 style="color: yellow;">𝘾𝙊𝙉𝙏𝘼𝘾𝙏 𝙐𝙎</h2></div>
                    <div class="conclogo">
                        <a href="https://www.instagram.com/"><p style="margin-top: 0;" id="p1"><i class="fa-brands fa-instagram" ></i></p></a>
                        <a href="https://www.facebook.com/login/"><p style="margin-top: 0;" id="p1"><i class="fa-brands fa-square-facebook"></i></p></a>
                        <a href="https://x.com/i/flow/login"><p style="margin-top: 0; " id="p1"><i class="fa-brands fa-x-twitter"></i></p></a>
                    </div> 
                </div>
            </div>
    <script src="script2.js"></script>
</body>
</html>

