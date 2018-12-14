// Check questions are answered by thr user or not in every steps

check0();
check1();
check2();
check3();
check4();
check5();
check6();
check7();
check8();

// Count answered questions

var count = 0; 

/*  STEP 1  */

var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;


/* For Question 1 */

$(document).ready(function(){
    $('.assessment0').on('click',function(){
        var data = $(".assessment0:checked").val();
        q1 = 1;

        if (q1 == 1  && count == 0) {
            count++;
        }
        console.log(count);

        check0();
            
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 2 */

$(document).ready(function(){
    $('.assessment1').on('click',function(){
        var data = $(".assessment1:checked").val();
        q2 = 1;

        if (q2 == 1  && count == 1) {
            count++;
        }
        console.log(count);

        check0();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 3 */

$(document).ready(function(){
    $('.assessment2').on('click',function(){
        var data = $(".assessment2:checked").val();
        q3 = 1;

        if (q3 == 1  && count == 2) {
            count++;
        }
        console.log(count);

        check0();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 4 */

$(document).ready(function(){
    $('.assessment3').on('click',function(){
        var data = $(".assessment3:checked").val();
        q4 = 1;

        if (q4 == 1  && count == 3) {
            count++;
        }
        console.log(count);

        check0();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

function check0(){
    if (q1 == 1 && q2 == 1 && q3 == 1 && q4 == 1) {
        document.getElementById("btnStep1").removeAttribute("disabled");
    } else {
        document.getElementById("btnStep1").setAttribute("disabled", true);
    }
}

/*  STEP 2  */

var q5 = 0;
var q6 = 0;
var q7 = 0;
var q8 = 0;



/* For Question 5 */

$(document).ready(function(){
    $('.assessment4').on('click',function(){
        var data = $(".assessment4:checked").val();
        q5 = 1;

        if (q5 == 1  && count == 4) {
            count++;
        }
        console.log(count);

        check1();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});


/* For Question 6 */

$(document).ready(function(){
    $('.assessment5').on('click',function(){
        var data = $(".assessment5:checked").val();
        q6 = 1;

        if (q6 == 1  && count == 5) {
            count++;
        }
        console.log(count);

        check1();
            
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 7 */

$(document).ready(function(){
    $('.assessment6').on('click',function(){
        var data = $(".assessment6:checked").val();
        q7 = 1;

        if (q7 == 1  && count == 6) {
            count++;
        }
        console.log(count);

        check1();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 8 */

$(document).ready(function(){
    $('.assessment7').on('click',function(){
        var data = $(".assessment7:checked").val();
        q8 = 1;

        if (q8 == 1  && count == 7) {
            count++;
        }
        console.log(count);

        check1();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

function check1(){
    if (q5 == 1 && q6 == 1 && q7 == 1 && q8 == 1) {
        document.getElementById("btnStep2").removeAttribute("disabled");
    } else {
        document.getElementById("btnStep2").setAttribute("disabled", true);
    }
}

/*  STEP 3  */

var q9 = 0;
var q10 = 0;
var q11 = 0;
var q12 = 0;
var q13 = 0;

/* For Question 9 */

$(document).ready(function(){
    $('.assessment8').on('click',function(){
        var data = $(".assessment8:checked").val();
        q9 = 1;

        if (q9 == 1  && count == 8) {
            count++;
        }
        console.log(count);

        check2();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});


/* For Question 10 */

$(document).ready(function(){
    $('.assessment9').on('click',function(){
        var data = $(".assessment9:checked").val();
        q10 = 1;

        if (q10 == 1  && count == 9) {
            count++;
        }
        console.log(count);

        check2();
            
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 11 */

$(document).ready(function(){
    $('.assessment10').on('click',function(){
        var data = $(".assessment10:checked").val();
        q11 = 1;

        if (q11 == 1  && count == 10) {
            count++;
        }
        console.log(count);

        check2();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 12 */

$(document).ready(function(){
    $('.assessment11').on('click',function(){
        var data = $(".assessment11:checked").val();
        q12 = 1;

        if (q12 == 1  && count == 11) {
            count++;
        }
        console.log(count);

        check2();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 13 */

$(document).ready(function(){
    $('.assessment12').on('click',function(){
        var data = $(".assessment12:checked").val();
        q13 = 1;

        if (q13 == 1  && count == 12) {
            count++;
        }
        console.log(count);

        check2();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

function check2(){
    if (q9 == 1 && q10 == 1 && q11 == 1 && q12 == 1 && q13 == 1) {
        document.getElementById("btnStep3").removeAttribute("disabled");
    } else {
        document.getElementById("btnStep3").setAttribute("disabled", true);
    }
}

/*  STEP 4  */

var q14 = 0;
var q15 = 0;
var q16 = 0;
var q17 = 0;
var q18 = 0;
var q19 = 0;

/* For Question 14 */

$(document).ready(function(){
    $('.assessment13').on('click',function(){
        var data = $(".assessment13:checked").val();
        q14 = 1;

        if (q14 == 1  && count == 13) {
            count++;
        }
        console.log(count);

        check3();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});


/* For Question 15 */

$(document).ready(function(){
    $('.assessment14').on('click',function(){
        var data = $(".assessment14:checked").val();
        q15 = 1;

        if (q15 == 1  && count == 14) {
            count++;
        }
        console.log(count);

        check3();
            
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 16 */

$(document).ready(function(){
    $('.assessment15').on('click',function(){
        var data = $(".assessment15:checked").val();
        q16 = 1;

        if (q16 == 1  && count == 15) {
            count++;
        }
        console.log(count);

        check3();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 17 */

$(document).ready(function(){
    $('.assessment16').on('click',function(){
        var data = $(".assessment16:checked").val();
        q17 = 1;

        if (q17 == 1  && count == 16) {
            count++;
        }
        console.log(count);

        check3();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 18 */

$(document).ready(function(){
    $('.assessment17').on('click',function(){
        var data = $(".assessment17:checked").val();
        q18 = 1;

        if (q18 == 1  && count == 17) {
            count++;
        }
        console.log(count);

        check3();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 19 */

$(document).ready(function(){
    $('.assessment18').on('click',function(){
        var data = $(".assessment18:checked").val();
        q19 = 1;

        if (q19 == 1  && count == 18) {
            count++;
        }
        console.log(count);

        check3();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

function check3(){
    if (q14 == 1 && q15 == 1 && q16 == 1 && q17 == 1 && q18 == 1 && q19 == 1) {
        document.getElementById("btnStep4").removeAttribute("disabled");
    } else {
        document.getElementById("btnStep4").setAttribute("disabled", true);
    }
}

/*  STEP 5  */

var q20 = 0;
var q21 = 0;
var q22 = 0;
var q23 = 0;
var q24 = 0;
var q25 = 0;
var q26 = 0;
var q27 = 0;
var q28 = 0;
var q29 = 0;

/* For Question 20 */

$(document).ready(function(){
    $('.assessment19').on('click',function(){
        var data = $(".assessment19:checked").val();
        q20 = 1;

        if (q20 == 1  && count == 19) {
            count++;
        }
        console.log(count);

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 21 */

$(document).ready(function(){
    $('.assessment20').on('click',function(){
        var data = $(".assessment20:checked").val();
        q21 = 1;

        if (q21 == 1  && count == 20) {
            count++;
        }
        console.log(count);

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 22 */

$(document).ready(function(){
    $('.assessment21').on('click',function(){
        var data = $(".assessment21:checked").val();
        q22 = 1;

        if (q22 == 1  && count == 21) {
            count++;
        }
        console.log(count);

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 23 */

$(document).ready(function(){
    $('.assessment22').on('click',function(){
        var data = $(".assessment22:checked").val();
        q23 = 1;

        if (q23 == 1 && count == 22) {
            count++;
        }
        console.log(count);

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 24 */

$(document).ready(function(){
    $('.assessment23').on('click',function(){
        var data = $(".assessment23:checked").val();
        q24 = 1;

        if (q24 == 1 && count == 23) {
            count++;
        }
        console.log(count);

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 25 */

$(document).ready(function(){
    $('.assessment24').on('click',function(){
        var data = $(".assessment24:checked").val();
        q25 = 1;

        if (q25 == 1 && count == 24) {
            count++;
        }
        console.log(count);

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 26 */

$(document).ready(function(){
    $('.assessment25').on('click',function(){
        var data = $(".assessment25:checked").val();
        q26 = 1;

        if (q26 == 1 && count == 25) {
            count++;
        }
        console.log(count);

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 27 */

$(document).ready(function(){
    $('.assessment26').on('click',function(){
        var data = $(".assessment26:checked").val();
        q27 = 1;

        if (q27 == 1 && count == 26) {
            count++;
        }
        console.log(count);

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 28 */

$(document).ready(function(){
    $('.assessment27').on('click',function(){
        var data = $(".assessment27:checked").val();
        q28 = 1;

        if (q28 == 1 && count == 27) {
            count++;
        }
        console.log(count);

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 29 */

$(document).ready(function(){
    $('.assessment28').on('click',function(){
        var data = $(".assessment28:checked").val();
        q29 = 1;

        if (q29 == 1 && count == 28) {
            count++;
        }
        console.log(count);

        check4();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

function check4(){
    if (q20 == 1 && q21 == 1 && q22 == 1 && q23 == 1 && q24 == 1 && q25 == 1  && q26 == 1 && q27 == 1 && q28 == 1 && q29 == 1) {
        document.getElementById("btnStep5").removeAttribute("disabled");
    } else {
        document.getElementById("btnStep5").setAttribute("disabled", true);
    }
}

/*  STEP 6  */

var q30 = 0;
var q31 = 0;
var q32 = 0;
var q33 = 0;
var q34 = 0;
var q35 = 0;
var q36 = 0;
var q37 = 0;

/* For Question 30 */

$(document).ready(function(){
    $('.assessment29').on('click',function(){
        var data = $(".assessment29:checked").val();
        q30 = 1;

        if (q30 == 1  && count == 29) {
            count++;
        }
        console.log(count);

        check5();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 31 */

$(document).ready(function(){
    $('.assessment30').on('click',function(){
        var data = $(".assessment30:checked").val();
        q31 = 1;

        if (q31 == 1  && count == 30) {
            count++;
        }
        console.log(count);

        check5();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 32 */

$(document).ready(function(){
    $('.assessment31').on('click',function(){
        var data = $(".assessment31:checked").val();
        q32 = 1;

        if (q32 == 1  && count == 31) {
            count++;
        }
        console.log(count);

        check5();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 33 */

$(document).ready(function(){
    $('.assessment32').on('click',function(){
        var data = $(".assessment32:checked").val();
        q33 = 1;

        if (q33 == 1  && count == 32) {
            count++;
        }
        console.log(count);

        check5();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 34 */

$(document).ready(function(){
    $('.assessment33').on('click',function(){
        var data = $(".assessment33:checked").val();
        q34 = 1;

        if (q34 == 1  && count == 33) {
            count++;
        }
        console.log(count);

        check5();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 35 */

$(document).ready(function(){
    $('.assessment34').on('click',function(){
        var data = $(".assessment34:checked").val();
        q35 = 1;

        if (q35 == 1  && count == 34) {
            count++;
        }
        console.log(count);

        check5();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 36 */

$(document).ready(function(){
    $('.assessment35').on('click',function(){
        var data = $(".assessment35:checked").val();
        q36 = 1;

        if (q36 == 1  && count == 35) {
            count++;
        }
        console.log(count);

        check5();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 37 */

$(document).ready(function(){
    $('.assessment36').on('click',function(){
        var data = $(".assessment36:checked").val();
        q37 = 1;

        if (q37 == 1  && count == 36) {
            count++;
        }
        console.log(count);

        check5();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

function check5(){
    if (q30 == 1 && q31 == 1 && q32 == 1 && q33 == 1 && q34 == 1 && q35 == 1  && q36 == 1 && q37 == 1) {
        document.getElementById("btnStep6").removeAttribute("disabled");
    } else {
        document.getElementById("btnStep6").setAttribute("disabled", true);
    }
}

/*  STEP 7 */

var q38 = 0;
var q39 = 0;
var q40 = 0;
var q41 = 0;

/* For Question 38 */

$(document).ready(function(){
    $('.assessment37').on('click',function(){
        var data = $(".assessment37:checked").val();
        q38 = 1;

        if (q38 == 1  && count == 37) {
            count++;
        }
        console.log(count);

        check6();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 39 */

$(document).ready(function(){
    $('.assessment38').on('click',function(){
        var data = $(".assessment38:checked").val();
        q39 = 1;

        if (q39 == 1  && count == 38) {
            count++;
        }
        console.log(count);

        check6();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 40 */

$(document).ready(function(){
    $('.assessment39').on('click',function(){
        var data = $(".assessment39:checked").val();
        q40 = 1;

        if (q40 == 1  && count == 39) {
            count++;
        }
        console.log(count);

        check6();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 41 */

$(document).ready(function(){
    $('.assessment40').on('click',function(){
        var data = $(".assessment40:checked").val();
        q41 = 1;

        if (q41 == 1  && count == 40) {
            count++;
        }
        console.log(count);

        check6();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

function check6(){
    if (q38 == 1 && q39 == 1 && q40 == 1 && q41 == 1) {
        document.getElementById("btnStep7").removeAttribute("disabled");
    } else {
        document.getElementById("btnStep7").setAttribute("disabled", true);
    }
}

/*  STEP 8 */

var q42 = 0;
var q43 = 0;
var q44 = 0;
var q45 = 0;

/* For Question 42 */

$(document).ready(function(){
    $('.assessment41').on('click',function(){
        var data = $(".assessment41:checked").val();
        q42 = 1;

        if (q42 == 1  && count == 41) {
            count++;
        }
        console.log(count);

        check7();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 43 */

$(document).ready(function(){
    $('.assessment42').on('click',function(){
        var data = $(".assessment42:checked").val();
        q43 = 1;

        if (q43 == 1  && count == 42) {
            count++;
        }
        console.log(count);

        check7();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 44 */

$(document).ready(function(){
    $('.assessment43').on('click',function(){
        var data = $(".assessment43:checked").val();
        q44 = 1;

        if (q44 == 1  && count == 43) {
            count++;
        }
        console.log(count);

        check7();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 45 */

$(document).ready(function(){
    $('.assessment44').on('click',function(){
        var data = $(".assessment44:checked").val();
        q45 = 1;

        if (q45 == 1  && count == 44) {
            count++;
        }
        console.log(count);

        check7();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

function check7(){
    if (q42 == 1 && q43 == 1 && q44 == 1 && q45 == 1) {
        document.getElementById("btnStep8").removeAttribute("disabled");
    } else {
        document.getElementById("btnStep8").setAttribute("disabled", true);
    }
}

/*  STEP 8 */

var q46 = 0;
var q47 = 0;
var q48 = 0;
var q49 = 0;
var q50 = 0;
var q51 = 0;
var q52 = 0;
var q53 = 0;

/* For Question 46 */

$(document).ready(function(){
    $('.assessment45').on('click',function(){
        var data = $(".assessment45:checked").val();
        q46 = 1;

        if (q46 == 1  && count == 45) {
            count++;
        }
        console.log(count);

        check8();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 47 */

$(document).ready(function(){
    $('.assessment46').on('click',function(){
        var data = $(".assessment46:checked").val();
        q47 = 1;

        if (q47 == 1  && count == 46) {
            count++;
        }
        console.log(count);

        check8();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 48 */

$(document).ready(function(){
    $('.assessment47').on('click',function(){
        var data = $(".assessment47:checked").val();
        q48 = 1;

        if (q48 == 1  && count == 47) {
            count++;
        }
        console.log(count);

        check8();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 49 */

$(document).ready(function(){
    $('.assessment48').on('click',function(){
        var data = $(".assessment48:checked").val();
        q49 = 1;

        if (q49 == 1  && count == 48) {
            count++;
        }
        console.log(count);

        check8();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});


/* For Question 50 */

$(document).ready(function(){
    $('.assessment49').on('click',function(){
        var data = $(".assessment49:checked").val();
        q50 = 1;

        if (q50 == 1  && count == 49) {
            count++;
        }
        console.log(count);

        check8();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 51 */

$(document).ready(function(){
    $('.assessment50').on('click',function(){
        var data = $(".assessment50:checked").val();
        q51 = 1;

        if (q51 == 1  && count == 50) {
            count++;
        }
        console.log(count);

        check8();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 52 */

$(document).ready(function(){
    $('.assessment51').on('click',function(){
        var data = $(".assessment51:checked").val();
        q52 = 1;

        if (q52 == 1  && count == 51) {
            count++;
        }
        console.log(count);

        check8();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

/* For Question 53 */

$(document).ready(function(){
    $('.assessment52').on('click',function(){
        var data = $(".assessment52:checked").val();
        q53 = 1;

        if (q53 == 1  && count == 52) {
            count++;
            //count = 53;
        }
        console.log(count);

        document.cookie = "CountTotalAnsweredQuestion="+count;

        check8();
        
        $.ajax({
            url:"check_up.php",
            method:"POST",
            data:{radio:data},
            success:function(data){
                $('#checkup-status').html(data);
            }
        });
    });
});

function check8(){
    if (q46 == 1 && q47 == 1 && q48 == 1 && q49 == 1 && q50 == 1 && q51 == 1 && q52 == 1 && q53 == 1) {
        document.getElementById("btnStep9").removeAttribute("disabled");
    } else {
        document.getElementById("btnStep9").setAttribute("disabled", true);
    }
}