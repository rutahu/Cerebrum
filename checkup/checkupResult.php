<?php

session_start();
error_reporting(0);

$ansQues = $_COOKIE['CountTotalAnsweredQuestion'];

$age = $_SESSION['age'];

$result = $_SESSION['result'];

$result1 = $result / 200;

$result2 = $result1 * 100;

$result2 = round($result2);

if ($result2 <= 0 && $result2 >= 20) {
    $message = "Dear user, you are quite okay and do not need to see any therapist. this amount of problems is something which every person in this world have and it actually occurs on current situation going around you. there is nothing to be worry about.";
} elseif ($result2 <= 21 && $result2 >= 40) {
    $message = "Dear user, you have moderate problems. It is okay and nothing to be worry about. but if you feel that it is the beginning of your problem, then you can talk to someone close to you or a therapist about your feelings and get some good suggestions";
} elseif ($result2 <= 41 && $result2 >= 60) {
    $message = "Dear user, the problem you have is not actually  ignorable. it would be better if you visit and consult with a therapist. or if you feel that this percentage of problem are only because of your current situation- what are happening around you now are just the reason then you may wait before consulting with someone.";
} else {
    $message = "Dear user, the problems you are going through are mot ignorable at all. may be the situation and environment around you is not so smooth and you need some expert suggestion. it'd be very good if you consult to a therapist and tell him/her your problems, so s/he could help you";
}

?>
<!doctype html>
<html lang="en">
<head>
    <title>Cerebrum - Your Mental Checkup</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" href="../img/brain.ico">

    <!-- Bootstrap core CSS -->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

    <!-- Custom styles for this template -->
    <link href="../css/agency.min.css" rel="stylesheet">
    <link href="../css/checkup.css" rel="stylesheet">
    <link href="../css/checkupresult.css" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" />


    <!-- Include jQuery -->
    <script src="../vendor/jquery/jquery.min.js"></script>
    <link href="../vendor/bootstrap/js/bootstrap.min.js" rel="stylesheet">
    

    <!-- Include SmartWizard JavaScript source -->
    <script type="text/javascript" src="../js/checkup.js"></script>

</head>
<body>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger text-primary" href="../">Cerebrum</a>
        </div>
    </nav>
    
    <div class="container" id="loader">
        <div class="row">
            <div class="showbox">
                <div class="loader">
                    <svg class="circular" viewBox="25 25 50 50">
                        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <div class="container animated fadeInDown delay-5s">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Check-up Result (age <?php echo $age; ?>)</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title"><?php echo $result2; ?>%</h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li class="text-justify">
                                <h5>You have answered <?php echo $ansQues; ?> question</h5>
                            </li>
                            <li class="text-justify">
                                <h5><?php echo $message; ?></h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="mt-4 text-justify">This is an approximate measurement of your current mental state. as it is not accurate or any experts solution, do not go on any kind of treatment by your own. please visit a doctor or a psychologist to have a discussion. stay safe and happy. bless</h3>
        </div>
    </div>

    <script>
        setInterval(function(){
            var element = document.getElementById("loader");
            element.parentNode.removeChild(element);
        }, 5000);
    </script>

</body>
</html>