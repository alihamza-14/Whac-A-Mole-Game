var mole = ["#mole1","#mole2","#mole3","#mole4","#mole5","#mole6","#mole7","#mole8","#mole9"];
var score=0;
var interval = 700;
var timerInterval;
var moleInterval;
var seconds;
$(document).ready(function(){
    $("button").click(function(){
        $(this).prop("disabled", true);
        $("#mole1").css({"display":"none"});

        $("#result").text("");

        if (timerInterval) {
            clearInterval(timerInterval);
        }

        $(".mole").off("click");

        seconds = 20;
        timerInterval = setInterval(() => {
            seconds=seconds-1;
            countdown(seconds);
            if(seconds<10){
                $("#timer").css({"color":"red"});
            }

            if (seconds <1) {
                clearInterval(timerInterval);
                clearInterval(moleInterval);
                $("img").css({"display":"none"});
                
                $("#result").text("Time Up! Your final score is: " + score);
                score = 0;
                $("#score").text(score);
                interval = 700;
                $("button").prop("disabled", false);
            }
        }, 1000);

        moleInterval = setInterval(()=>{
            id = changeMole();
            $("img").css({"display":"none"});
            $(id).css({"display":"inline"});
            interval-=10;    
        },interval);

        $(".mole").click(function () {
            
            score+=1;
            $("#score").text(score);
            $(this).hide();
            
        });

    })

    function countdown(seconds){
        document.getElementById("timer").innerHTML =seconds+"s";
    }

    function changeMole(){
        randomindex = Math.floor(Math.random()*9);
        id = mole[randomindex];
        return id;
    } 
});



