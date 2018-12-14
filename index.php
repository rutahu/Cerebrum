<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Cerebrum - Your Mental Checkup</title>

    <link rel="icon" href="img/brain.ico">
    
    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

    <!-- Custom styles for this template -->
    <link href="css/agency.min.css" rel="stylesheet">

</head>

<body id="page-top">

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#">Cerebrum</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fa fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="psychologict.html">Psychologist's Information</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#check_up">check up</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Header -->
    <header class="masthead">
        <div class="container">
            <div class="intro-text">
                <div class="intro-lead-in">Welcome To Our Mental Health Center!</div>
                <div class="intro-heading text-uppercase">It's Nice To Meet You</div>
                <!-- <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a> -->
            </div>
        </div>
    </header>

    <!-- Services -->
    <section id="check_up">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase">Do you want to check up?</h2>
                    <h3 class="section-subheading text-muted">Please help us by fill up this form.</h3>
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-md-8">
                    <form class="form-horizontal" action="" method="post">
                        <fieldset>
                            <!-- Input Age-->
                            <div class="form-group row">
                                <label class="col-md-3 control-label" for="ageinput">Age</label>  
                                <div class="col-md-9">
                                    <input id="ageinput" name="ageinput" type="number" class="form-control input-md" placeholder="Your Age" required="">
                                </div>
                            </div>

                            <!-- Input Gender -->
                            <div class="form-group row">
                                <label class="col-md-3 control-label" for="radios">Gender</label>
                                <div class="col-md-9"> 
                                    <select class="form-control" id="Gender" name="gender" placeholder="Search Type" required>
                                        <option>Select Gender</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div class="float-right form-group row">
                                <button type="submit" class="btn btn-dark" name="formSubmit">Submit</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mx-auto">
                            <div class="modal-body">
                                <!-- Project Details Go Here -->
                                <h2 class="text-uppercase">Notice</h2>
                                <p>You are not eligible for this test</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Contact form JavaScript -->
    <script src="js/jqBootstrapValidation.js"></script>
    <script src="js/contact_me.js"></script>

    <!-- Custom scripts for this template -->
    <script src="js/agency.min.js"></script>

</body>
</html>
<?php

error_reporting(0);
session_start();
if (isset($_SESSION['result']) || isset($_SESSION['age'])) {
    unset($_SESSION['result']);
    unset($_SESSION['age']);
}

if (isset($_POST['formSubmit'])) {
    $age        = $_POST['ageinput'];
    $_SESSION['age'] = $age;
    $gender     = $_POST['gender'];

    echo $age . " : " . $gender;
    echo $_SESSION['age'];

    if ($gender == 1) {
        $gender = "male";
    } elseif ($gender == 2) {
        $gender = "female";
    } else{
        echo "<script>javascript:document.location='index.php'</script>";
    }
    
    if ($age < 13) {
        echo "<script>
        $(window).on('load',function(){
            $('#portfolioModal1').modal('show');
        });
        </script>";
    } else{
        echo "<script>javascript:document.location='checkup/'</script>";
    }
}

?>